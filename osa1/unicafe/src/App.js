import React, { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <th>
        {props.text}
      </th>
      <th>
        {props.value}
      </th>
    </tr>
  )
}

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
        <table>
          <StatisticLine text='good' value={props.feedback.good} />
          <StatisticLine text='neutral' value={props.feedback.neutral} />
          <StatisticLine text='bad' value={props.feedback.bad} />
          <StatisticLine text='all' value={props.statictics.all} />
          <StatisticLine text='average' value={props.statictics.average} />
          <StatisticLine text='positive' value={props.statictics.positive + ' %'} />
          </table>
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