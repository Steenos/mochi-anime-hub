import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import {XIcon} from '@heroicons/react/outline'
import { Show } from '../typings'
import ReactPlayer from 'react-player'
import { FaPlay } from 'react-icons/fa'
import { PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function Modal() {

    const [showModal, setShowModal]= useRecoilState(modalState)
    const [show, setShow] = useRecoilState(movieState)
    const [trailer, setTrailer] = useState("")
    const [genres, setGenres] = useState<string[]>([])
    const [muted, setMuted] = useState(true)
    //console.log(show?.id)

    const cleanText = (text: string | undefined) => {
        if (text){
            return text.replace(/<[^>]*>?/gm, '')
        }
        return text
       }

    useEffect(() => {
        
        if(!show) return

        async function fetchMovie(){
            const data = await fetch(`https://api.aniapi.com/v1/anime/${show?.id}`).then((response) => response.json()).catch(err => console.log(err.message))
            
            //console.log(data)
            /* console.log(data.data.titles)
            console.log(data.data.trailer_url)
            console.log(data.data.genres) */
            if (data?.data.trailer_url){
                setTrailer(data.data.trailer_url)
            }
            if (data?.data.genres){
                setGenres(data.data.genres)
            }
           
            
        }

        fetchMovie()
    }, [show])

    console.log(trailer)
    console.log(genres)

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
                        src={show?.banner_image || show?.cover_image}
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
                    <div className='flex items-center space-x-2 text-sm'>
                        <p className='font-semibold text-green-400'>{show?.score}% Rating</p>
                        <p className='font-light'>{show?.start_date}</p>
                        <div className='flex h-4 items-center justify-center rounded border
                        border-white/40 px-1.5 text-xs'>HD</div>
                    </div>

                    <div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
                       <p className='prose text-white w-5/6'>
                        {/*    god bless - code to parse out html tags
                       https://stackoverflow.com/questions/822452/strip-html-from-text-javascript */}
                           {cleanText(show?.descriptions.en)}
                        </p> 
                       <div className='flex flex-col space-y-3 text-sm'>
                        <div>
                            <span className='text-[gray]'>Genres: </span>
                            {genres.slice(0,5).map((genre) => genre).join(' · ')}
                        </div>
                       </div>
                       
                    </div>
                </div>
            </div>
        </>
    </MuiModal>)
}

export default Modal