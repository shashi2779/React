import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
        <Child firstName={'shashi'} lastName={'yadav'}/>
        <Child firstName={'vikash'} lastName={'yadav'}/>

    </div>
  )
}

export default Parent