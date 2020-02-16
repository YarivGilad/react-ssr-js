import React, { useState, useEffect, useRef} from 'react'

const App = ()=> {
    const [date,setDate] = useState(new Date());
    const timerID = useRef(null);

    useEffect(()=>{
        timerID.current = setInterval(() => setDate(new Date()), 1000);
        return ()=> clearInterval(timerID.current);
    },[])

    return (
        <div>
          <h1 style={{color:'blue'}}>Hello, world!</h1>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );

}
export default App;