
import { useEffect, useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  
  const [quote, setQuote] = useState('')

  const API_KEY = "aHBp9MET39dLK70pn/yOeA==gKrXP75Og9VvPca6";
  const API_URL = "https://api.api-ninjas.com/v1/quotes?category=life&"

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'x-api-key': `${API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setQuote(data[0].quote)
      })
      .catch(err => console.error(err)
      )
  }, [])

  return (
    <>
      <h2 className='text-3xl font-semibold text-center'>Random Quote Generator</h2>
      <p>{quote}</p>
      <Button />
    </>
  )
}

export default App
