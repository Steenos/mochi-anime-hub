import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import {Show} from '../typings'
import Thumbnail from '../components/Thumbnail'
import { useRef, useState } from 'react'
interface Props {
    title: string
    shows: Show[]
}
function Row({ title, shows }: Props) {
    //console.log(shows)

    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState<Boolean>(false)

    const handleClick = (direction: string) => {
        setIsMoved(true)

        if (rowRef.current) {
            const {scrollLeft, clientWidth} = rowRef.current

            const scrollTo = direction === "left" 
                ? scrollLeft - clientWidth 
                : scrollLeft + clientWidth

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth'})
        }
    }
  return (
    <div className=" h-40 space-y-0.5 md:space-y-2  ">
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-gray-200 transition
        duration-200 hover:text-white md:text-2xl">{title}</h2>

        <div className="group relative md:-ml-2 z-0">
            <ChevronLeftIcon 
                onClick={() => handleClick("left")}
                className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer
                opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`}/>
            
            <div ref={rowRef} className=" relative flex z-0 scrollbar-hide items-center overflow-x-scroll space-x-0.5 md:space-x-2.5 md:p-2">
                {/* thumbnail */}
                {shows.map((show) => (
                    <Thumbnail key={show.id} show={show}/> 
                    
                ))} 
                
            </div>
           
           
            <ChevronRightIcon 
                onClick={() => handleClick("right")}
                className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer
                opacity-0 transition hover:scale-125 group-hover:opacity-100`}/>
        </div>
    </div>
  )
}

export default Row