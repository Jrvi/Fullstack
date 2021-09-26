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
  
  const Total = (parts) => {
  
    const sum = parts.parts.map(total => total.exercises).reduce((a, b) => a + b)
  
    return (
      <div>
        <b>Total of {sum} exercises</b>
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
        <Total parts={props.course.parts} />
      </div>
    )
  }

export default Course