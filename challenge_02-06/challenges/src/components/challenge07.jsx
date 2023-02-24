import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const Challenge07 = ({value}) => {

    const{counter,handleAdd,handleSubstract,handleReset, setCounter} = useCounter(value)

    return (
        <>
            <h1>Counter = {counter} </h1>
            <button onClick={()=>handleAdd()}>+1</button>
            <button onClick={()=>handleSubstract()}>-1</button>
            <button onClick={()=>handleReset()}>Reset</button>
        </>
    )
}
export default Challenge07