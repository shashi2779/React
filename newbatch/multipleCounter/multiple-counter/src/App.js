
import './App.css';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';
import InputArea from './components/InputArea';
import React from 'react'


function App() {
  const [counterNumber,setCounterNumber] = React.useState("")
  const [counterMember,setCounterMember] = React.useState("")


  let valueAAyi = (num,mem) =>{
      // console.log(num,mem)
      setCounterNumber(num)
      setCounterMember(mem)
  }

  let blackValue = ()=>{
    setCounterNumber("")
    setCounterMember("")
  }

  return (
   <>
   <h1>APP</h1>

   <InputArea getInputVal={valueAAyi}/>
   <CounterGroup counterNumber={counterNumber} counterMember={counterMember} blackValue={blackValue} />
   </>
   
  );
}

export default App;
