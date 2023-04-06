import { useState } from 'react'
import reactLogo from './static/react.svg'
import viteLogo from './static/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    fetch(`/increment/${count}`)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then((val) => {
        setCount(parseInt(val))
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCount}>click</button>
        <p>{count}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div >
  )
}

export default App
