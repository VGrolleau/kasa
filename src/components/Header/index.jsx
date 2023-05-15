import { Link } from "react-router-dom"
import Nav from "../Nav/index.jsx"
import KasaLogo from "../../assets/logo.png"
import '../../utils/styles/Header.css'

function Header() {
    return (
        <div className="header">
            <Link to='/kasa/'>
                <img src={KasaLogo} alt="Logo Kasa" />
            </Link>
            <Nav />
        </div>
    )
}

export default Header