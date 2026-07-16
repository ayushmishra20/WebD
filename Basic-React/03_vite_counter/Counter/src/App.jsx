import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setcounter] = useState(15)

  const addvalue = () => {
    setcounter((prevcounter) => Math.min(prevcounter + 1, 20))
  }

  const removevalue = () => {
    setcounter((prevcounter) => Math.max(prevcounter - 1, 0))
  }

  return (
    <>
      <h1>You can change the value by clicking the buttons.</h1>

      <h3>click please!!!</h3>

      <h4>clicked : {counter}</h4>
      <button id='click' onClick={addvalue}> Add value on number : {counter}</button>
      <button id='click' onClick={removevalue}>Remove : {counter}</button>

      <footer>Value is : {counter}</footer>
    </>
  )
}

export default App
