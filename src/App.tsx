import { useState, useEffect } from 'react'
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
 useEffect(() => {
  const resChar = currentText.split('');
  setCharacterCount(resChar.length);
  },[currentText])
 useEffect(() => {
  const resCount = currentText.split(' ')
  setWordCount(resCount.length)
 },[currentText])

  return (
    <>
    <div className='container text-center'>
      
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
        
      <div style={{margin: '15px 0 2px 0'}}>
      <CharacterCounter 
        minWords={5}
        maxWords={300}
        />
        </div>
      </div>
    </>
  )
}

export default App

