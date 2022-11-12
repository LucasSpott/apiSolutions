import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login and Register/Login'
import Register from './Login and Register/Register'
import Projeto from './Projeto/Projeto'
import HomeLogin from './Login and Register/PosLogin/HomeLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/projeto" element={<Projeto />} />
      <Route path="/homelogin" element={<HomeLogin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
