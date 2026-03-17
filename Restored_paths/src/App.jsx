import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from './assets/restored_paths.png'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import RulesOfCourt from './pages/RulesOfCourt'
import Guidelines from './pages/Guidlines'

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
      <div className="global-bg" aria-hidden="true">
        <span className="heart-balloon hb1">❤</span>
        <span className="heart-balloon hb2">❤</span>
        <span className="heart-balloon hb3">❤</span>
        <span className="heart-balloon hb4">❤</span>
        <span className="heart-balloon hb5">❤</span>
        <span className="heart-balloon hb6">❤</span>
      </div>
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
            <Link to="/guidelines" className="navlink" onClick={()=> setMenuOpen(false)}>Guidelines</Link>
            <Link to="/rules-of-court" className="navlink" onClick={()=> setMenuOpen(false)}>Rules of Court</Link>
            <Link to="/contact" className="navlink" onClick={()=> setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/rules-of-court" element={<RulesOfCourt />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
