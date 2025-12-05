import React from 'react'
import type { CharacterCounterProps } from '../../types'

export const CharacterCounter:React.FC<CharacterCounterProps> = ({
    minWords,
    maxWords,
}) => {

// Min: 25 | Max: 100
  return (
    <div>
        Min: {minWords} | Max: {maxWords}
    </div>
  )
}
