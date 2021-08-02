import React, { useState } from 'react'

export default function Home() {

  const [number, setNumber] = useState(0);
  
  return (
    <>
      <h1 className="my-class">Hello, World number {number}!</h1>
      <input
        type="password"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>Number is {number}</p>
    </>
  )
}

