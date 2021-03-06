import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Person = (props) => {
  return (
    <p>{props.name} {props.number}</p>
  )
}

const Filter = (props) => {

  return (
    <form>
        <div>
          filter shown with <input value={props.showAll} onChange={props.handle}/>
        </div>
      </form>
  )
}

const App = () => {

  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState('')

  useEffect(() => {
    console.log("effect")
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
      })
  }, [])
  console.log("render", persons.length, "persons")

  const personsToShow = showAll
    ? persons.filter(person => person.name.toUpperCase().indexOf(showAll.toUpperCase()) !== -1)
    : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleShowAllChange = (event) => {
    setShowAll(event.target.value)
  }

  const hasName = () => {

    let has = false

    persons.forEach(element => {
      if (element.name === newName) has = true
    })
    return has
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    
    if (hasName()) alert(newName + " is already added to phonebook")
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter showAll={showAll} handle={handleShowAllChange}/>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => <Person key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App