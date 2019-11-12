import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [voted, setVoted] = useState(Array(6).fill(0))
    const copy = [...voted]
    let best = voted.indexOf(Math.max(...voted))

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{props.anecdotes[selected]}</p>
            <button onClick={() => {
                return setSelected(Math.floor(Math.random() * 6))
            }}>Next anecdote</button>

            <button onClick={() => {
                copy[selected] += 1
                setVoted([...copy])
            }}>Vote</button>

            {console.log(voted)}
            {console.log(best)}
            {console.log(props.anecdotes[best])}

            <h2>Anecdote with most votes</h2>
            <p>{props.anecdotes[best]}</p>


        </div>
    )
}


const anecdotes = [
    '0: If it hurts, do it more often',
    '1: Adding manpower to a late software project makes it later!',
    '2: The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    '3: Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '4: Premature optimization is the root of all evil.',
    '5: Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)