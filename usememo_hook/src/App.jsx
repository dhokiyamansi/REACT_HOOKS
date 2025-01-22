import { useState, useMemo, useEffect } from 'react'; // Correct imports
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);  // Add this to track the 'number' state
  
  // Use memoization for slow function
  const doubleNumber = useMemo(() => {
    return slowfunction(number);
  }, [number]);

  function slowfunction(num) {
    for (let i = 0; i <= 100000; i++) {
      // Simulate a slow function
    }
    return num * 2;
  }

  const [dark, setDark] = useState(false);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);  // Memoize the styles based on the dark state

  useEffect(() => {
    console.log('theme Changed');
  }, [themeStyles]); // Only run this effect when themeStyles change

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>
        {/* You can display the result of the memoized function */}
        <p>Double of {number} is {doubleNumber}</p>
      </div>
    </>
  );
}

export default App;
