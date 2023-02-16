import { useState } from 'react'

const Challenge03 = ({value}) => {

    const[counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter(counter +1)
    }

    const handleSubstract  = () => {
        setCounter(counter -1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    return (
        <>
            <h1>Counter = {counter} </h1>
            <button onClick={()=>handleAdd()}>+1</button>
            <button onClick={()=>handleSubstract()}>-1</button>
            <button onClick={()=>handleReset()}>Reset</button>
        </>
    )
}
export default Challenge03