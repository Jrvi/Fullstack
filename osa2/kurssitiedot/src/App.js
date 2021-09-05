import React from 'react'

const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part}/>
    </div>
  )
}

const Total = (props) => {

  let element = 0

  for (let i = 0; i < props.total.length; i++) {
    element += props.total[i].exercises
  }

  return (
    <div>
      <b>Total of {element} exercises</b>
    </div>
  )
}

const Part = (props) => {
  return (
    props.part.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name}/>
      <Content part={props.course.parts}/>
      <Total total={props.course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App