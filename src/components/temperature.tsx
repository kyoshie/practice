'use client'

import { useState } from "react"

export default function Temperature(){
    const [celsius, setCelsius] = useState("")
    const[fahrenheit, setFahrenheit] = useState("")

    const convert = () => {
       if (celsius === "" || isNaN(Number(celsius))) return;
       const f = (parseFloat(celsius) * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
    }

    const reset =() => {
        setCelsius("")
        setFahrenheit("")
    }

    return(
        <div className="flex justify-center items-center">
           <input
  value={celsius}
  onChange={(e) => setCelsius(e.target.value)}
  className="border border-gray-500 focus:border-blue-500 p-2"
  placeholder="Enter Celsius"
/>

            <button 
            onClick={convert}
            className="bg-blue-500 w-full p-3">
                Convert
            </button>

            <button 
            onClick={reset}
            className="bg-blue-500 w-full p-3">
                Reset
            </button>

            {fahrenheit !== null && (
        <p className="text-lg">
          {celsius}°C = <strong>{fahrenheit}°F</strong>
        </p>
      )}

        </div>
    )
}