import React from 'react'

function Counter() {
  const [Count, setCount] = useState(1)
  return (
    <div>
      <button>Show Count</button>
      <h1>Counter show open</h1>
      <h3>Counter is {Count}</h3>
      <button>Increment</button>
    </div>
  )
}

export default Counter