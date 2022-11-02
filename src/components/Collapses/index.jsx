import Collapse from "../../components/Collapse/index.jsx";
import '../../utils/styles/Collapses.css'

function Collapses() {
    const collapseContents = [
        {
            "id": "1",
            "text": "Fiabilité",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem."
        },
        {
            "id": "2",
            "text": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id": "3",
            "text": "Service",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem."
        },
        {
            "id": "4",
            "text": "Responsabilité",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem."
        },
    ]

    return (
        <section className="collapse-section">
            <Collapse collapseContents={collapseContents} />
        </section>
    )
}

export default Collapses;