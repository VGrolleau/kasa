import { useEffect } from "react"
import { useLocation } from "react-router"
import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
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
                <div className="host-rating">
                    <div className="host">
                        <p>{location.state.data.host.name}</p>
                        <img src={location.state.data.host.picture} alt={`${location.state.data.host.name}`} />
                    </div>
                    <div className="rating">
                        <Rating rating={location.state.data.rating} />
                    </div>
                </div>
            </div>

            <div className="collapses">
                <Collapse title="Description" content={location.state.data.description} />
                <Collapse title="Équipements" content={
                    location.state.data.equipments.map((equipment, index) => {
                        return (
                            <p key={index}>{equipment}</p>
                        )
                    })} />
            </div>
        </section>
    )
}

export default Housing;