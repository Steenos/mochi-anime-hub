import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import {XIcon} from '@heroicons/react/outline'
import { Episodes, Show } from '../typings'
import ReactPlayer from 'react-player'
import { FaPlay } from 'react-icons/fa'
import { PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EpisodeList from './EpisodeList'

function Modal() {

    const [showModal, setShowModal]= useRecoilState(modalState)
    const [show, setShow] = useRecoilState(movieState)
    const [trailer, setTrailer] = useState("")
    const [genres, setGenres] = useState<[{name: string}] | undefined>()
    const [showId, setShowId] = useState()
    const [sagas, setSagas] = useState<object[]>([])
    const [currentSaga, setCurrentSaga] = useState()
    //const [episodes, setEpisodes] = useState<Episodes | undefined>([])
    const [muted, setMuted] = useState(true)
    //console.log(show?.id)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


    const cleanText = (text: string | undefined) => {
        if (text){
            return text.replace(/<[^>]*>?/gm, '')
        }
        return text
       }

    useEffect(() => {
        
        if(!show) return

        async function fetchMovie(){
            const data = await fetch(`https://api.jikan.moe/v4/anime/${show?.mal_id}`).then((response) => response.json()).catch(err => console.log(err.message))
            
            
            //console.log(data)
            /* console.log(data.data.titles)
            console.log(data.data.trailer_url)
            console.log(data.data.genres) */
            if (data?.data.trailer.embed_url){
                setTrailer(data.data.trailer.embed_url)
            }
            if (data?.data.genres){
                setGenres(data.data.genres)
            }
            if(data?.data.id){
                setShowId(data.data.id)
            }
            if(data?.data.sagas){
                setSagas(data.data.sagas)
            }
           
            
            
        }
        
        
        fetchMovie()
        
    }, [show])
    //console.log(sagas)
    //console.log(trailer)
    //console.log(genres)
    //console.log(showId)
    //console.log("episodes: ", episodes)

    
    
    //console.log(vid, headers)

    const handleClose = () => {
        setShowModal(false)
    }
    return (
    
        <MuiModal 
            open={showModal} 
            onClose={handleClose}
            className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl
            overflow-hidden overflow-y-scroll rounded-md scrollbar-hide'>
        <>
            <div className="absolute right-5 top-5 !z-40 h-9 w-9">
            <button onClick={handleClose} className='fixed modalButton   border-none
            bg-[#181818] hover:bg-[#181818]'>
                <XIcon className="h-6 w-6" />
            </button>
            </div>
            

            <div className='relative pt-[56.25%]'>
                {trailer ? <ReactPlayer
                    url={trailer}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: '0', left: '0' }}
                    /* playing */
                    muted={muted}
                /> : <Image
                        src={show?.images.jpg.image_url || show?.images.jpg.large_image_url}
                        className="rounded-sm object-cover md:rounded"
                        layout="fill"
            />}
                <div className='absolute bottom-10 flex w-full items-center justify-between px-10'>
                    <div className='flex space-x-2'>
                        <button className='flex items-center gap-x-2 rounded bg-white px-8 text-xl
                        font-bold text-black'>
                            <FaPlay className='h-7 w-7 text-black'/>
                            Play
                        </button>
                        
                        <button className='modalButton'>
                            <PlusIcon className='h-7 w-7'/>
                        </button>

                        <button className='modalButton'>
                            <ThumbUpIcon className='h-7 w-7 hover:animate-pulse'/>
                        </button>
                    </div>

                    <button onClick={() => setMuted(!muted)} className='modalButton'>
                        {muted ? (
                            <VolumeOffIcon className='h-6 w-6' />
                        ) :
                        <VolumeUpIcon className='h-6 w-6' />
                        }
                    </button>
                </div>
            </div>

            <div className='flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8'>
                <div className='space-y-6 text-lg'>

                    {/* rating and info */}

                    <div className='flex items-center space-x-2 text-sm'>
                        <p className='font-semibold text-green-400'>{show?.score * 10}% Rating</p>
                        <p className='font-light'>{show?.rating}</p>
                        <div className='flex h-4 items-center justify-center rounded border
                        border-white/40 px-1.5 text-xs'>HD</div>
                    </div>

                    {/* description & genres */}

                    <div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
                       <p className='prose text-white w-5/6'>
                        {/*    god bless - code to parse out html tags
                       https://stackoverflow.com/questions/822452/strip-html-from-text-javascript */}
                           {cleanText(show?.synopsis)}
                        </p> 
                       <div className='flex flex-col space-y-3 text-sm'>
                        <div>
                            <span className='text-[gray]'>Genres: </span>
                            {genres?.map((genre) => genre.name).join(' · ')}
                        </div>
                       </div>
                       
                    </div>
                    
                    <div>
                        {/* <div className='flex justify-between'>
                            <h1>Episodes</h1>
                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Sagas
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleCloseMenu}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                                    <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                                    <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </div> */}
                        <div className=''>
                            {
                                
                            }
                            {/*  {episodes.map((episode) => (
                                <>
                                    <h1 className='text-white text-sm'>{episode.title}</h1> 
                                    <p>{episode.video}</p>
                                    <p>{episode.video_headers.referer}</p>
                                    
                                </>
                                
                            ))}  */}
                        </div>
                        {/* <EpisodeList episodes={episodes}/> */}
                    </div>
                   
                </div>
            </div>
        </>
    </MuiModal>)
}

export default Modal