import React, { useState } from 'react'

const App = () => {
  /* tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) */

  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})
  const [statictics, setStatictics] = useState({all: 0, average: 0, positive: 0})

const Display = () => {
  return (
    <div>
      <p>
        good {feedback.good} <br/>
        neutral {feedback.neutral} <br/>
        bad {feedback.bad} <br/>
        all {statictics.all} <br/>
        average {statictics.average} <br/>
        positive {statictics.positive} % <br/>
        </p>
    </div>
  )
}

const handleStatictics = (props) => {
  const newStatictics = {
    all: props.good + props.neutral + props.bad,
    average: (props.good - props.bad) / (props.good + props.neutral + props.bad),
    positive: props.good / (props.good + props.neutral + props.bad)
  }
  setStatictics(newStatictics)
}

const handleGood = () => {
  const newFeedback = {
    good: feedback.good + 1,
    neutral: feedback.neutral,
    bad: feedback.bad
  }
  setFeedback(newFeedback)
  handleStatictics(newFeedback)
}

const handleNeutral = () => {
  const newFeedback = {
    good: feedback.good,
    neutral: feedback.neutral + 1,
    bad: feedback.bad
  }
  setFeedback(newFeedback)
  handleStatictics(newFeedback)
}

const handleBad = () => {
  const newFeedback = {
    good: feedback.good ,
    neutral: feedback.neutral,
    bad: feedback.bad + 1
  }
  setFeedback(newFeedback)
  handleStatictics(newFeedback)
}

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statictics</h1>
      <Display/>
    </div>
  )
}

export default App