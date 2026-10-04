import { useEffect, useState } from 'react'
import Nav from './webcomp/nav'
import Info from './webcomp/info'
import About from './webcomp/About'
import Projects from './webcomp/Projects'
import Skills from './webcomp/Skills'
import Hobbies from './webcomp/hobbies'
import Education from './webcomp/Education'
import Footer from './webcomp/Footer'
import './App.css'

type Theme = 'dark' | 'light'
function readTheme(): Theme {
  const saved = localStorage.getItem('portfolio-theme')
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
function App() {
  const [theme, setTheme] = useState<Theme>(readTheme)
  const [opening, setOpening] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme) }, [theme])
  useEffect(() => { if (!opening) return; const timer = window.setTimeout(() => setOpening(false), 1450); return () => window.clearTimeout(timer) }, [opening])
  return <div className="site-shell" data-opening={opening ? 'true' : 'false'}>
    {opening ? <div className="opening-mark" aria-hidden="true">smit.dev</div> : null}
    <Nav theme={theme} onThemeToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
    <main><Info /><About /><Projects /><Skills /><Hobbies /><Education /></main><Footer />
  </div>
}
export default App
