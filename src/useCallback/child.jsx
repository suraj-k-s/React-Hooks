import React from 'react'

export default function Child({ returnCallback }) {
    return (
        <div>{returnCallback("ANSON")}</div>
    )
}
