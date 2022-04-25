import React, { useState } from 'react'

function WeatherApp() {

  const [city, setCity] = useState("")
  const [result, setResult] = useState("")

  const changeHandler = e => {
    setCity(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    console.log(city)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(response => response.json()).then(data => {
        const kelvin = data.main.temp
        const celcies = kelvin - 273.15
      setResult("Temparature at "+ " " +city+ "\n" + Math.round(celcies) + "C")
      setCity("")
    }).catch(error => console.log(error))
  }

  return (
    <div>
        <center>
            <div className='card'>
                <div className='cardBody'>
                    <h4 className='cardTitle'>Weather App</h4>
                    <form onSubmit={submitHandler}>
                        <input type="text" value={city} onChange={changeHandler} name="weather" /> <br></br> <br></br>
                        <input type="submit" value="Submit" name="Submit" />
                    </form>
                </div>
                <h2>{result}</h2>
            </div>
        </center>
    </div>
  )
}

export default WeatherApp