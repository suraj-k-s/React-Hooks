import React, { useRef } from 'react'
import Button from './Button'

function ImperativeHandle() { //ImperativeHandle used acces child states from parent
    const buttonRef = useRef() 
    return (
        <div>
            <br /><br />
            <button onClick={()=>{
                buttonRef.current.alterToggle()
            }}>Button from parent</button>
            <br />
            <Button ref={buttonRef} />
        </div>
    )
}

export default ImperativeHandle