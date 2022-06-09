import React,{useState} from 'react'

function Counter() {
  const [count,setCount] = useState(0)
  return (
    <div style={{position:'absolute',top:'30%',left:'50%'}}>
      <h1 style={{marginLeft:'1.5rem'}}>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+ve</button>
      <button onClick={()=>setCount(count>0?count-1:0)}>-ve</button>
    </div>
  )
}

export default Counter