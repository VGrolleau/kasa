import Collapse from "../../components/Collapse/index.jsx";
import '../../utils/styles/Collapses.css'

function Collapses() {
    const collapseContents = [
        {
            "id": 1,
            "text": "Fiabilité",
            "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            "id": 2,
            "text": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id": 3,
            "text": "Service",
            "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            "id": 4,
            "text": "Responsabilité",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
    ]

    let clickedElementId;
    const clickedElementClass = "open";

    return (
        <section className="collapse-section" onClick={(e) => {
            console.log(document.querySelectorAll(".collapse"), e.target.parentElement.id, e.target.textContent)
            // document.querySelectorAll(".collapse").foreach((collapse) => {
            //     console.log(collapse, e.target.parentElement.id)
            // })
            // clickedElementId = e.target.parentElement.id;
            // // e.target.parentElement.classList.add(clickedElementClass);
            // console.log(clickedElementId);
        }}>
            <Collapse collapseContents={collapseContents} clickedElementId={clickedElementId} clickedElementClass={clickedElementClass} />
        </section>
    )
}

export default Collapses;