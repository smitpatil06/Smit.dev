import { BsMoonStars, BsSun } from 'react-icons/bs'
import DropDown from './dropdown'
type NavProps = { theme: 'dark' | 'light'; onThemeToggle: () => void }
function Nav({ theme, onThemeToggle }: NavProps) {
  return <header className="site-nav"><nav className="page-width nav-inner" aria-label="Main navigation">
    <a className="brand" href="#top">smit.dev</a>
    <div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#hobbies">Hobbies</a><a href="#contact">Contact</a></div>
    <div className="nav-actions"><button className="theme-toggle" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <BsSun aria-hidden="true" /> : <BsMoonStars aria-hidden="true" />}</button><div className="mobile-menu"><DropDown /></div></div>
  </nav></header>
}
export default Nav
