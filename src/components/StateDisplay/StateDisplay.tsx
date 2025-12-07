import React from 'react'
import type { StatsDisplayProps } from '../../types'

export const StateDisplay:React.FC<StatsDisplayProps> = ({
    stats
})=> {
  return (
    <div className='container text-center'>
        <div className='row'>
          <div className='col'>
            <p>Characters</p>
            {stats.characterCount}
          </div>
          <div className='col'>
            <p>Words</p>
            {stats.wordCount}
          </div>
          <div className='col'>
            <p>Reading Time</p>
            {stats.readingTime}
          </div>
        </div>
    </div>
  )
}
