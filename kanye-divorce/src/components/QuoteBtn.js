import React from "react"
import { Button } from "@material-ui/core"

const QuoteBtn = ({ getQuote }) => {
    return (
        <Button onClick={getQuote} variant='outlined' color='primary'>
            Thank You Kanye, Very Cool!
        </Button>
    )
}

export default QuoteBtn