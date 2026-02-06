import React, { useState, useEffect } from 'react';

const App = () => {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    
    setNum1(200);
    console.log("from useEffect");

    
    return () => {
      console.log("memory cleaned");
    };
  }, []); 

  return (
    <div>
      <h1>Num 1: {num1}</h1>
      
      <button onClick={() => setNum1((curr) => curr + 1)}>Increment Num 1</button>
      
      <h2>Num 2: {num2}</h2>
      <button onClick={() => setNum2((curr) => curr + 1)}>Increment Num 2</button>
    </div>
  );
};

export default App;