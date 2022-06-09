import React,{useState} from 'react'

function InputTextPrint() {
    const [text,setText] = useState('')
    const [textItemArr,setTextItemArr] = useState([])


   let textHandle =(text)=>{
        setTextItemArr([...textItemArr,text])
        setText('')
    }

  return (
    <div style={{position:'absolute',top:'20%',left:'30%'}}>
     <input value={text} style={{fontSize:'2rem'}} placeholder='enter text' onChange={(e)=>setText(e.target.value)}/>
     <button style={{fontSize:'2rem'}} onClick={()=>textHandle(text)}>click</button>
     <ul style={{fontSize:'2rem'}} >
         {
             textItemArr.map((itemtxt)=>(
                <li>{itemtxt}</li>
             ))
         }
     </ul>
    </div>
  )
}

export default InputTextPrint