import Header from '../../components/Header/index.jsx';
import { useEffect } from "react"

function About() {
    useEffect(() => { document.title = "Kasa - À propos" })
    return (
        <div>
            <Header />
            <h1>À propos</h1>
        </div>
    );
}

export default About;