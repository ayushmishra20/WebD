// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "hitesh",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]

  return (
    <><body class="bg-slate-900">

      <h1 className='bg-yellow
      -400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
      </body>
    </>
  )
}

export default App