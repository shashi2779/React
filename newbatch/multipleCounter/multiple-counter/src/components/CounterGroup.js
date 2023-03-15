import React from 'react'
import Counter from './Counter'
import './counterGroup.css'

function CounterGroup(props) {
  let counterNumber = props.counterNumber;
  let counterMember = props.counterMember;
  let blackValue = props.blackValue

  return (
    <>
      <div className='counter-edit'>
        <Counter number={1} counterNumber={counterNumber} counterMember={counterMember} blackValue={blackValue} />
        <Counter number={2} counterNumber={counterNumber} counterMember={counterMember} blackValue={blackValue} />
        <Counter number={3} counterNumber={counterNumber} counterMember={counterMember} blackValue={blackValue} />
      </div>
    </>
  )
}

export default CounterGroup