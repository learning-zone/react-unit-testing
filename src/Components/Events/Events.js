import React from 'react'
import { Button } from '@mui/material';


export default function Events() {

    const [counter, setcounter] = React.useState(0);
    return (
        <div className='Counter'>
            <h1 data-test='counter-title'>Event & Snapshot Test</h1>
            
            <h2 data-test='counter-value'>{counter}</h2>

            <Button variant='contained' color='primary' data-test='increment-btn' onClick={() => setcounter(counter + 1)} >Increment</Button>&nbsp;
            <Button variant='contained' color='primary' data-test='decrement-btn' onClick={() => setcounter((counter > 0) ? (counter - 1) : 0)} >Decrement</Button>
        </div>
    )
}
