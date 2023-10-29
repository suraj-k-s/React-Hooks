import React, { useMemo, useState } from 'react'

function Memo() {
    // useMemo used to handle function rerender , its helps only rerender specific funtion on dependency changes
    const [toggle, setToggle] = useState(false)

    function findName() {
        console.log("WORK")

        return "MEMO CHECK" // Without useMemo its work every toggle updates
    }

    const getName = useMemo(() => findName(), []) // Use Memo Return Value

    return (
        <div>
            <h4>{getName}</h4>
            <button onClick={() => {
                setToggle(!toggle)
            }}>
                Click Here
            </button>

            {toggle && <h2>Toggle</h2>}
        </div>
    )
}

export default Memo