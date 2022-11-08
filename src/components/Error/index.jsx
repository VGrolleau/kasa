import { useEffect } from "react"
import Header from '../../components/Header/index.jsx';
import Footer from '../../components/Footer';
import { Link } from "react-router-dom";
import '../../utils/styles/Error.css'

function Error() {
    useEffect(() => { document.title = "Kasa - 404" })
    return (
        <div>
            <Header />
            <section className="section-error">
                <h1>404</h1>
                <p>
                    Oups! La page que vous demandez n’existe pas.
                </p>
                <Link to='/'>Retourner à la page d'accueil</Link>
            </section>
            <Footer />
        </div>
    )
}

export default Error