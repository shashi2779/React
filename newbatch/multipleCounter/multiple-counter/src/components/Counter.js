import React from 'react'

function Counter(props) {
    const [count,setCount] = React.useState("0")
    let number = props.number
    let counterNumber = props.counterNumber
    let counterMember = props.counterMember
    let blackValue= props.blackValue


    // number == counterMember => member -> 1,2,3 me jana chahiye
    // counterNumber != count  =>  if i enter 25 to print then cout != 25 hona chahiye. 
    if(number == counterMember && counterNumber != count){
        setCount(counterNumber)
        blackValue()
    }
    
    let increment = () =>{
        setCount(Number(count)+1)
    }

    let decrement = () =>{
        if(count>0)
        setCount(count-1)
    }

    return (
        <>
        <div>
         <h2>Counter Number {number}</h2>
          <button onClick={increment}>+</button>
          <h2>Count :{count}</h2>
          <button onClick={decrement}>-</button>
        </div>
        </>
    )
}

export default Counter