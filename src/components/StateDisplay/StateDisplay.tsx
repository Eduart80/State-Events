import React from 'react'
import type { StatsDisplayProps } from '../../types'

export const StateDisplay:React.FC<StatsDisplayProps> = ({
    stats
})=> {
  return (
    <div className='d-flex p-4'>
        <div>
          <p>Characters</p>
          {stats.characterCount}
        </div>
        <div>
          <p>Words</p>
          {stats.wordCount}
        </div>
        <div>
          <p>Reading Time</p>
          {stats.readingTime}
        </div>
    </div>
  )
}
