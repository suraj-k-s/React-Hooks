import React, { useCallback, useState } from 'react'
import Child from './child'

function Parent() {
    const [data, setData] = useState("Hello Its Me ")
    const [toggle, setToggle] = useState(false)

    const returnCallback = useCallback((name) => {
        console.log("Function Called")
        return data + name
    }, [data]) // Its Similar to use Memo here useCallback return function
    return (
        <div>
            <br />
            <Child returnCallback={returnCallback} />

            <br />
            <button onClick={() => {
                setToggle(!toggle)
            }}>Click Here</button>

            {
                toggle && <> <br /> <h5>Toggle</h5> </>
            }
        </div>
    )
}

export default Parent