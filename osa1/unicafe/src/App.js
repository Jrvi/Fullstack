import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const temp = good + 1
    setGood(temp)
  }

  const handleNeutralClick = () => {
    const temp = neutral + 1
    setNeutral(temp)
  }

  const handleBadClick = () => {
    const temp = bad + 1
    setBad(temp)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <h1>statistics</h1>
      </div>
      <div>
        <p>good {good}<br></br>
        neutral {neutral}<br></br>
        bad {bad}<br></br>
        </p>
      </div>
    </div>
  )
}

export default App