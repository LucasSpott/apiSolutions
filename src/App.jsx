import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Projeto from './Projeto/Projeto'
import Parceiros from "./Parceiros/Parceiros";
import Contato from './Contato/Contato'
import Sobre from './Sobre/Sobre'
import Termos from './Termos e Privacidade/Termos';
import Privacidade from './Termos e Privacidade/Privacidade';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projeto" element={<Projeto />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/privacidade" element={<Privacidade />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
