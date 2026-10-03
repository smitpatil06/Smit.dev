import { useState } from 'react'
import { CgDetailsMore } from 'react-icons/cg'
function DropDown() {
  const [open, setOpen] = useState(false)
  const links = [['#about', 'About'], ['#projects', 'Projects'], ['#skills', 'Skills'], ['#hobbies', 'Hobbies'], ['#contact', 'Contact']]
  return <div className="mobile-dropdown"><button onClick={() => setOpen((value) => !value)} className="menu-toggle" aria-label="Open navigation menu" aria-expanded={open}><CgDetailsMore /></button>{open ? <div className="menu-panel">{links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div> : null}</div>
}
export default DropDown
