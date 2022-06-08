import React from 'react'
import { Episodes } from '../typings'

interface Props {
    episodes: Episodes | undefined
}
function EpisodeList({ episodes }: Props) {
  return (
    <div>
        <div className='flex flex-row'>
            <div className='thumbnail w-40 h-20 bg-gray-400'></div>
            <h1>{episodes?.documents?.title}</h1>
        </div>
        
    </div>
  )
}

export default EpisodeList