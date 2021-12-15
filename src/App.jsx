import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Call from "./pages/Call"
import Chat from "./pages/Chat"
import Feedback from "./pages/feedback"
import Index from './pages/Index'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/call" element={<Call />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<div className='flex justify-center mt-16 text-8xl'>Nothing here...</div>} />
      </Routes>
    </Router>
  )
}

export default App
