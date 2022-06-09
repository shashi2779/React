import React,{useState} from 'react'

function Typing() {
    const [text,setText] = useState('')
  return (
    <div style={{position:'absolute',top:'30%',left:'30%'}}>
       <input style={{fontSize:'2rem'}} placeholder='enter text' onChange={(e)=>setText(e.target.value)}/>
       <h1>{text}</h1>
    </div>
  )
}

export default Typing