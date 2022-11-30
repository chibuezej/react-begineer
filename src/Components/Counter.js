import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [Delete] = useState(0);
    return(
     <React.Fragment>
        <p>The count is:{count}</p>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count -1)}>decreament</button>
        <button onClick={() => setCount(Delete)}>Delete</button>
     </React.Fragment>
    )
}

export default Counter;