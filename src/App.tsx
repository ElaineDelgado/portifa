import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Info from './pages/Info'
import Portifa from './pages/Portifa'
import ContactMe from './pages/ContactMe'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="main-container "> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Info" element={<Info />} />
        <Route path="ContactMe" element={<ContactMe/>} />
        <Route path="Portifa" element={<Portifa/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
