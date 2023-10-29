import React, { useState, useTransition } from 'react'
import TransitionPost from './transitionPost'

function Transition() {
    const [isPending, startTransition] = useTransition()
    const [tab, setTab] = useState('')

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab)
        })
    }
    return (
        <div>
            Transition
            <br />

            <button onClick={() => {
                selectTab('posts')
            }}>
                Show Posts
            </button>
            <br />

            {tab === 'posts' ? <TransitionPost /> : "ABOUT"}
        </div>
    )
}

export default Transition