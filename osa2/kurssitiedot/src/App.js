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

/*const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    </div>
  )
}*/ // Varmaan käytetään myöhemmin niin jätän tänne

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