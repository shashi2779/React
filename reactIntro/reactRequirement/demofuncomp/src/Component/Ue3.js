import React,{useEffect,useState} from 'react'

function Ue3() {
 const [count,setCount]= useState(0)
 const [name,setName] = useState('shashi')

 useEffect(()=>{
     
     document.title = `this counter value ${count} ${name}`
 },[count,name]) // enn dono me se kisi ek ko chalana h toh o bhi [count],[name] aise chala sakte h , mai toh dono ko chalaya hu

 
 
  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={()=>setCount(count+1)}>+ve</button>
      <button onClick={()=>setName('vikash')}>press for new name</button>
    </div>
  )
 
}

export default Ue3