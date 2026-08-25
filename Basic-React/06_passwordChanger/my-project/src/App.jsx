import { useState, useCallback, useMemo, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [charAllowed, setcharAllowed] = useState(false)
  const [number, setnumber] = useState(false)

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (number) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += '!@#$%^&*-_+=[]{}~`'
    }

    let pass = ''
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    return pass
  }, [length, number, charAllowed])

  const password = useMemo(() => passwordGenerator(), [passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-red-500">
        <h1 className='text-white text-center my-3'>
          Password Changer 
        </h1>

      <div>

        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}>
        </input>
         <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-green-700 text-white  px-3 py-0.5 shrink-0'
        >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(Number(e.target.value))}}>
          </input>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          checked={number}
          id="numberInput"
          onChange={() => {
              setnumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

      </div>
      </div>
      
    </>
  )
}

export default App
