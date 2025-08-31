import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// icons
import { ClockIcon } from './Icon.jsx';
// index.css'
import '../styles/index.css'

// components
function CounterSimple(props) {
  return (
    <div className='containerCounter'>
      <div className='calendar'>
        <ClockIcon />
      </div>
      <div className='cinco'></div>
      <div className='cuatro'></div>
      <div className='tres'></div>
      <div className='dos'></div>
      <div className='uno'></div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterSimple />
  </React.StrictMode>,
)
