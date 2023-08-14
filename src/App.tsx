import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import cypressDarkLogo from './assets/cypress_dark.png';
import cypressLightLogo from './assets/cypress_light.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://www.cypress.io' target='_blank'>
          <img
            src={dark ? cypressLightLogo : cypressDarkLogo}
            className='logo'
            alt='Cypress logo'
          />
        </a>
      </div>
      <h1>Vite + React + Cypress</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
