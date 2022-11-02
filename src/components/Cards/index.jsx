import Card from "../Card"
import '../../utils/styles/Cards.css'
import Datas from '../../datas/logements.json'

function Cards() {
    return (
        <section className="cards">
            <Card Datas={Datas} />
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
        </section>
    )
}

export default Cards