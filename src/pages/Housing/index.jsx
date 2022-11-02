import Header from '../../components/Header/index.jsx';
import { useEffect } from "react"

function Housing() {
    useEffect(() => { document.title = "Kasa - Logements" })
    return (
        <div>
            <Header />
            <h1>Logements</h1>
        </div>
    );
}

export default Housing;