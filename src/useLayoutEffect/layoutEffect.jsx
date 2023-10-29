import React, { useEffect, useLayoutEffect, useRef } from 'react'

function LayoutEffect() {
    const inputRef = useRef()

    useLayoutEffect(() => {
        console.log(inputRef.current.value)

    }, []) // its called before rendered

    useEffect(() => {
        inputRef.current.value = "hello"
    }, []) // useEffect called after everything rendered
    return (
        <div>
            <input type="text" value="PEDRO" ref={inputRef} readOnly />
        </div>
    )
}

export default LayoutEffect