import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Countries = (props) => {

  if (props.countries.length > 10) return (<MoreThanTen />)
  else if (props.countries.length < 10 && props.countries.length !== 1) return (<LessThanTen countries={props.countries}/>)
  else if (props.countries.length === 1) return (<OneLeft country={props.countries}/>)
  else return (<p>this should npt show up</p>)

}

const MoreThanTen = (props) => {
  return (
    <p>Too many matches, specify another filter</p>
  )
}

const LessThanTen = (props) => {
  return (
    <div>{props.countries.map(country => <Country key={country.numericCode} name={country.name} />)}</div>
  )
}

const OneLeft = (props) => {
  return (
    <div>
      <h1>{props.country[0].name}</h1>
      <p>capital {props.country[0].capital}</p>
      <p>population {props.country[0].population}</p>
      <h2>Languages</h2>
      <p>{props.country[0].map}</p>
      <img></img>
    </div>
  )
}

const Country = (props) => {
  return (
    <p>{props.name}</p>
  )
}

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ showAll, setShowAll ] = useState('')


  useEffect(() => {
    console.log("effect")
    axios
      .get("https://restcountries.com/v2/all")
      .then(response => {
        console.log("promise fulfilled")
        setCountries(response.data)
      })
  }, [])
  console.log("render", countries.length, "countries")

  const countriesToShow = showAll
    ? countries.filter(country => country.name.toUpperCase().indexOf(showAll.toUpperCase()) !== -1)
    : countries

  const handleShowAllChange = (event) => {
    setShowAll(event.target.value)
  }

  return (
    <div>
      <div>
        <form>
          <div>
            find counries <input value={showAll} onChange={handleShowAllChange}/>
          </div>
        </form>
      </div>
      <div>
      {<Countries countries={countriesToShow}/>}
      </div>
    </div>
  )
}

export default App