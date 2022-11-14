import { useEffect } from "react"
import { useParams } from "react-router"
import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse"
import Rating from "../../components/Rating"
import Tag from "../../components/Tag"
import '../../utils/styles/Housing.css'
import Datas from "../../datas/logements.json"
import Error from "../Error"

function Housing() {
    const urlId = useParams().housingId;
    let datasHousing;
    let titleDoc;
    Datas.forEach(data => {
        if (data.id === urlId) {
            datasHousing = data
        }
    })
    useEffect(() => { document.title = titleDoc })
    if (datasHousing) {
        titleDoc = `Kasa - ${datasHousing.title}`
        return (<section className="housing" >
            <Carousel pictures={datasHousing.pictures} />
            <div className="title-host">
                <div className="title">
                    <h1>{datasHousing.title}</h1>
                    <p>{datasHousing.location}</p>
                    <div className="tags">
                        {datasHousing.tags.map(tag => {
                            return <Tag text={tag} key={tag} />
                        })}
                    </div>
                </div>
                <div className="host-rating">
                    <div className="host">
                        <p>{datasHousing.host.name}</p>
                        <img src={datasHousing.host.picture} alt={`${datasHousing.host.name}`} />
                    </div>
                    <div className="rating">
                        <Rating rating={datasHousing.rating} />
                    </div>
                </div>
            </div>

            <div className="collapses">
                <Collapse title="Description" content={datasHousing.description} />
                <Collapse title="Équipements" content={
                    datasHousing.equipments.map((equipment, index) => {
                        return (
                            <p key={index}>{equipment}</p>
                        )
                    })} />
            </div>
        </section>
        )
    } else {
        titleDoc = `Kasa - 404`
        return <Error />
    }
}

export default Housing;