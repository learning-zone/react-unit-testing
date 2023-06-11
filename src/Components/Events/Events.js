import React from 'react'
import { Button } from '@mui/material';

export default function Events() {

    const [counter, setCounter] = React.useState(0);

    return (
        <div className='Counter'>
            <h1 aria-label='title'>Event Testing</h1>
            <h2 aria-label='result'>{counter}</h2>

            <Button
                variant='contained'
                color='primary'
                aria-label='increment-btn'
                onClick={() => setCounter(counter + 1)}
            >
                Increment
            </Button>
        </div>
    )
}
