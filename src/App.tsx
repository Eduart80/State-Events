import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import {StateDisplay} from "./components/StateDisplay/StateDisplay"
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'


function App() {
 const [currentText, setCurrentText] = useState('')
 const [characterCount, setCharacterCount] = useState(0)
 const [wordCount, setWordCount] = useState(0)
 const [readingTime, setReadingTime] = useState(0)

 const handleText = (params:string)=> {
      setCurrentText(params)
 }

  return (
    <>
    <TextInput 
      onTextChange={handleText}
      placeholder=''
      initialValue=''
    />
    <StateDisplay 
     stats={{
       characterCount,
       wordCount,
       readingTime
     }}
      />

    <CharacterCounter 
      minWords={5}
      maxWords={300}
    />
    </>
  )
}

export default App
