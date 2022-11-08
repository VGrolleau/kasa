import { useEffect } from "react"

function Housing() {
    useEffect(() => { document.title = "Kasa - Logements" })
    return (
        <div>
            <h1>Logements</h1>
        </div>
    );
}

export default Housing;