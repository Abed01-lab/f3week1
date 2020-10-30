import {useEffect, useState} from 'react';

function Count() {
  const [count, setCount] = useState(parseInt(localStorage.getItem('count'))|| 0);
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);
  return (
    <div>
      <h2>Ex 1</h2>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}> Add to count</button> <br></br>
      <button onClick={() => setCount(count - 1)}>Sub from count</button>
    </div>
  );
}

export default Count;