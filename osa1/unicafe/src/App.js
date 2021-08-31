import React, { useState } from 'react'

//TODO: korjaa tämä funktio
const Statistics = (props) => {
  if (props.statictics.all === 0) {
    return (
      <div>
        <h1>statictics</h1>
        <p>no feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statictics</h1>
        <p>
          good {props.feedback.good} <br/>
          neutral {props.feedback.neutral} <br/>
          bad {props.feedback.bad} <br/>
          all {props.statictics.all} <br/>
          average {props.statictics.average} <br/>
          positive {props.statictics.positive} % <br/>
          </p>
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {

  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})
  const [statictics, setStatictics] = useState({all: 0, average: 0, positive: 0})

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
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad' />
      <Statistics feedback={feedback} statictics={statictics}/>
    </div>
  )
}

export default App