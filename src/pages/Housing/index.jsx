import { useEffect } from "react"
import { useLocation } from "react-router"
import Carousel from "../../components/Carousel"
import '../../utils/styles/Housing.css'

function Housing(props) {
    const location = useLocation();
    useEffect(() => { document.title = `Kasa - ${location.state.data.title}` })
    return (
        <section>
            <Carousel pictures={location.state.data.pictures} />
            <h1>{location.state.data.title}</h1>
        </section>
    )
}

export default Housing;