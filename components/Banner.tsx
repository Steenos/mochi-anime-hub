import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Movie, Show } from '../typings'
import {baseUrl} from '../constants/movie'
import {FaPlay} from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'

import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props {
    randomShow?: Show
}
function Banner({ randomShow }: Props) {

    const [show, setShow] = useState<Show | null>(null)
    const [showModal, setShowModal]= useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

 /*    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, []) */

   /*  function stripHtml(html: string)
    {
       let tmp = document.createElement("DIV");
       tmp.innerHTML = html;
       return tmp.textContent || tmp.innerText || "";
    } */

   // console.log(movie)

   const cleanText = (text: string | undefined) => {
    if (text){
        return text.replace(/<[^>]*>?/gm, '')
    }
    return text
   }

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen '>
            <Image /* src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} */
            src={`${randomShow?.images?.jpg?.large_image_url}`}
            layout="fill"
            objectFit="cover"
            />
        </div>

        <h1 className='font-bold text-2xl lg:text-7xl md:text-4xl'>
            {randomShow?.title_english || randomShow?.title_japanese}
        </h1>
        <p className="line-clamp-3 max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
            {cleanText(randomShow?.synopsis)}
        </p>

        <div className="flex space-x-3">
            <button className="bannerButton bg-white text-black">
                <FaPlay className='h-4 w-4 text-black md:h-7 md:h-7'/>
                Play
            </button>
            <button className="bannerButton bg-[gray]/70"
                    onClick={() => {
                        setCurrentMovie(randomShow)
                        setShowModal(true)
                      }}>
                More Info
                <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/>
            </button>
        </div>
    </div>
  )
}

export default Banner