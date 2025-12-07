import { useState, useEffect } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import {StateDisplay} from "./components/StateDisplay/StateDisplay"
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'


function App() {
 const [currentText, setCurrentText] = useState('')
 const [characterCount, setCharacterCount] = useState(0)
 const [wordCount, setWordCount] = useState(0)
 const [readingTime, setReadingTime] = useState('0:00')

 const handleText = (params:string)=> {
      setCurrentText(params)
 }
 //char count
 useEffect(() => {
  const resChar = currentText.split('');
  setCharacterCount(resChar.length);
  },[currentText])
  
  // word count
 useEffect(() => {
  const trimText = currentText.trim()
  if(trimText === ''){
    setWordCount(0)
  }else{
    const resCount = currentText.split(' ').filter(word => word.length > 0)
    setWordCount(resCount.length)
  }
 },[currentText])

 // time calc
 useEffect(() => {
  const averageWordsPerMinute = 200; 
   const totalMinutes = wordCount / averageWordsPerMinute;
  const minutes = Math.floor(totalMinutes);
  const seconds = Math.round((totalMinutes - minutes) * 60);
  
  if(wordCount === 0) {
    setReadingTime("0:00");
  } else if(totalMinutes < 1) {
    setReadingTime(`0:${seconds.toString().padStart(2, '0')}`);
  } else {
    setReadingTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
  }
 }, [wordCount])

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

