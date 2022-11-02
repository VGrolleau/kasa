import { Link } from 'react-router-dom'
import '../../utils/styles/Nav.css'

function Nav() {
    return (
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/about'>A propos</Link>
        </nav>
    )
}

export default Nav