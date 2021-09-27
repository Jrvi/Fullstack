import React, { useState } from 'react'

const Person = (props) => {
  return (
    <p>{props.name}</p>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' } ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
      name: newName
    }
    
    if (hasName()) alert(newName + " is already added to phonebook")
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} name={person.name}/>)}
    </div>
  )

}

export default App