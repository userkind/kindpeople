import { useState } from 'react'
import User from './User'
const TestFifth = () => {
    const [number, setNumber] = useState(1)

    return (
        <div>
            <h1>{number}</h1>
            <User count={number} setCount={setNumber} />
        </div>
    );
}
export default TestFifth;
