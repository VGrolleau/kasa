import { useEffect } from "react"
import { useLocation } from "react-router"
import Carousel from "../../components/Carousel"
import Tag from "../../components/Tag";
import '../../utils/styles/Housing.css'

function Housing(props) {
    const location = useLocation();
    useEffect(() => { document.title = `Kasa - ${location.state.data.title}` })
    return (
        <section className="housing">
            <Carousel pictures={location.state.data.pictures} />
            <div className="title-host">
                <div className="title">
                    <h1>{location.state.data.title}</h1>
                    <p>{location.state.data.location}</p>
                    <div className="tags">
                        {location.state.data.tags.map(tag => {
                            return <Tag text={tag} key={tag} />
                        })}
                    </div>
                </div>
                <div className="host">
                    <p>{location.state.data.host.name}</p>
                    <img src={location.state.data.host.picture} alt={`${location.state.data.host.name}`} />
                </div>
            </div>
        </section>
    )
}

export default Housing;