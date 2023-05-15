import { NavLink } from 'react-router-dom'
import '../../utils/styles/Nav.css'

function Nav() {
    return (
        <nav>
            <NavLink to='/kasa/' className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
            <NavLink to='/kasa/about/' className={({ isActive }) => (isActive ? "active" : "")}>A propos</NavLink>
        </nav>
    )
}

export default Nav