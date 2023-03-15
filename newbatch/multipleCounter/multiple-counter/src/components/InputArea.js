import React from 'react'

function InputArea(props) {
    const [num,setNum] = React.useState("");
    const [mem,setMum] = React.useState("");



    let countNum = (e)=>{
         setNum(e.target.value)
    }

    let countMem = (e)=>{
        setMum(e.target.value)
   }

   let sendVal = ()=>{
         props.getInputVal(num,mem)
        //   console.log(num+" "+mem)
       
   }

    return (
        <>
            <h2>Reset Counter</h2>
            <h2>Counter Number : <input value={num} onChange={countNum} /></h2>
            <h2>Counter Member : <input value={mem} onChange={countMem} /></h2>
            <button onClick={sendVal}>Reset Counter</button>
        </>
    )
}

export default InputArea