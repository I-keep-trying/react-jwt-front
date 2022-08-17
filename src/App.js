import React, { useState } from 'react'

import Child from './components/Child'
import RootContext from './RootContext'

// This object will be passed to the GrandChild component through context

function App() {
  const [msg, setMsg] = useState('Hello!')
const [data1, setData1] = useState({
  number: 123,
  text: 'ABC',
  func: () => {
    alert(msg)
  },
  func2: () => {setMsg('Hello Again!!')}
})

const changeNum = () => {
  setData1({...data1, number: data1.number + 1})
}

  return (
    // RootContext Provider
    <RootContext.Provider value={data1}>
      <div style={{ padding: 30 }}>
        <Child />
        <p>{JSON.stringify(msg)} </p>
        <button onClick={changeNum} >number</button>
      </div>
    </RootContext.Provider>
  )
}

export default App
