import { useEffect } from "react"
import Header from '../../components/Header/index.jsx';
import BannerAbout from "../../components/BannerAbout/index.jsx";
import Footer from '../../components/Footer';
import Collapses from "../../components/Collapses/index.jsx";

function About() {
    useEffect(() => { document.title = "Kasa - A Propos" })
    return (
        <div>
            <Header />
            <BannerAbout />
            <Collapses />
            <Footer />
        </div>
    );
}

export default About;