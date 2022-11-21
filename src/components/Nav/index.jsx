import { NavLink } from 'react-router-dom'
import '../../utils/styles/Nav.css'

function Nav() {
    return (
        <nav>
            <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? "active" : "")}>A propos</NavLink>
        </nav>
    )
}

export default Nav