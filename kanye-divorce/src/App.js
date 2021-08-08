import { Container } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import QuoteBtn from'./components/QuoteBtn'
import svc from "./services/services"
const uri = '/api/kanye'

const App = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    svc.getQuote(uri).then(x => {
      setQuote(x)
    })
  }, [])

  const handleQuote = () => {
    svc.getQuote(uri).then(x => {
      setQuote(x)
    })
  }
  
  return(
    <Container maxWidth='sm'>
      <h1>{quote}</h1>
      <QuoteBtn getQuote={handleQuote} />
    </Container>
  )
}

export default App