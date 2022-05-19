import React from 'react'
import { Show } from '../typings'
import Image from 'next/image'
import {useState }from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
  
interface Props {
    show?: Show  
}
function Thumbnail({show}: Props) {

  
  const [showModal, setShowModal]= useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  
  return (
      <>
      
      
      
      
          <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 '
             onClick={() => {
              setCurrentMovie(show)
              setShowModal(true)
            }}  
            /*  onMouseOver={() => {
              setCurrentMovie(show)
              setShowModal(true)}}  */
             /* onMouseLeave={() => {setShowModal(false)}}  */
            >
            <Image
                src={show?.cover_image}
                className="rounded-sm object-cover md:rounded"
                layout="fill"
            />
          </div>

          {/* <div className="hidden group-hover:block rounded-b-md h-28 min-w-[180px] bg-slate-800 duration-200
          md:h-36 md:min-w-[260px]"
          >
    <div className="flex justify-between ">
      <div className="flex space-x-0.5 items-center">
       
 
        
    </div>
     
    </div>
    
    <div className="flex">
      <p className="text-green-500 font-extrabold  text-xs">89% match</p>
      <p className="text-white text-xs">2 Seasons</p>
    </div>
    <p className="px-6 py-2 text-white text-xs">Exciting · Kids · Rivalry</p>
    
    
  </div> */}
      
      </>
    
  )
}

export default Thumbnail