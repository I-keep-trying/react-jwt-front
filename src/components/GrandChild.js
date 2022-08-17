import React, { useContext } from 'react'

import RootContext from '../RootContext'

const GrandChild = () => {
  // useContext hook
  const data = useContext(RootContext)

  return (
    <>
      <br />
      Grandchild Component
      <p>{data.number}</p>
      <p>{data.text}</p>
      <p>
        <button onClick={data.func}>A Button</button>
        <button onClick={data.func2}>Another Button</button>
      </p>
    </>
  )
}

export default GrandChild
