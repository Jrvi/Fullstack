import React, { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      {props.text} <br />
      has {props.points} votes
    </div>
  )
}

const DisplayMostVoted = (props) => {

  const arrayMaxIndex = function(array) {
    return array.indexOf(Math.max.apply(null, array));
  }

  const mostVoted = arrayMaxIndex(props.points)

  return (
    <div>
      {props.anecdotes[mostVoted]} <br />
      has {props.points[mostVoted]} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])

  const randomAnectode = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVote = () => {
      const copy = [...points]
      copy[selected] += 1
      setPoints(copy)
  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      <Display text={anecdotes[selected]} points={points[selected]}/>
      <button onClick={handleVote}>vote</button>
      <button onClick={randomAnectode}>next anectode</button>
      <h1>Anectode with most votes</h1>
      <DisplayMostVoted anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App
