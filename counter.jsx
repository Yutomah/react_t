import {useState} from 'react';

export default function Counter(){
    const [counter, useCounter] = useState(0)

    return (
        <button onClick={() => useCounter((counter) => counter+1 )}>{counter}</button>
    )
}