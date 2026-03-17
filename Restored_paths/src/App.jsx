import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from './assets/restored_paths.png'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  // close mobile menu when resizing to larger screens
  useEffect(()=>{
    const onResize = () => { if(window.innerWidth > 680) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])
  return (
    <div className="app">
      <div className="global-bg" aria-hidden="true" />
      <header className="site-header">
        <div className="brand-left">
          <Link to="/" className="brand">
            <img src={logo} alt="Restored Paths" className="header-logo" />
            <span className="site-name">Restoring Paths</span>
          </Link>
        </div>
        <div className="header-inner">
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={()=> setMenuOpen(open => !open)}
          >
            ☰
          </button>
          <nav className={`topnav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <Link to="/" className="navlink" onClick={()=> setMenuOpen(false)}>Home</Link>
            <Link to="/services" className="navlink" onClick={()=> setMenuOpen(false)}>Services</Link>
            <Link to="/about" className="navlink" onClick={()=> setMenuOpen(false)}>About</Link>
            <Link to="/contact" className="navlink" onClick={()=> setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
