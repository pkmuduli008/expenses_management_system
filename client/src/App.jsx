import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import Login from './pages/Login'

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
