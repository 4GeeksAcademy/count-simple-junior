import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// icons
import { ClockIcon } from './Icon.jsx';
// index.css'
import '../styles/index.css'

// components
function CounterSimple() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCounter(c => c + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const digitUno = Math.floor((counter / 1) % 10);
  const digitDos = Math.floor((counter / 10) % 10);
  const digitTres = Math.floor((counter / 100) % 10);
  const digitCuatro = Math.floor((counter / 1000) % 10);
  const digitCinco = Math.floor((counter / 10000) % 10);

  return (
    <div className='containerCounter'>
      <div className='calendar'>
        <ClockIcon />
      </div>
      <div className='cinco'>{digitCinco}</div>
      <div className='cuatro'>{digitCuatro}</div>
      <div className='tres'>{digitTres}</div>
      <div className='dos'>{digitDos}</div>
      <div className='uno'>{digitUno}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterSimple />
  </React.StrictMode>,
)