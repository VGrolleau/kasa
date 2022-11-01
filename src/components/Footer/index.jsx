import KasaLogoWhite from '../../assets/logo-white.png'
import '../../utils/styles/Footer.css'

function Footer() {
    return (
        <footer>
            <img src={KasaLogoWhite} alt="Logo Kasa white" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer