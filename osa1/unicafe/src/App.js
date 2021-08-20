import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const [helper, setHelper] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setHelper(helper + 1)
    updateStatistics()
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    updateStatistics()
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setHelper(helper - 1)
    updateStatistics()
  }

  const updateStatistics = () => {
    const newAverage = (helper / all)
    const newPositive = (good / all)
    setAll(all + 1)
    setAverage(newAverage)
    setPositive(newPositive * 100)
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
        all {all}<br></br>
        average {average}<br></br>
        positive {positive} %
        </p>
      </div>
    </div>
  )
}

export default App