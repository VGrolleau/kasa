import '../../utils/styles/Card.css'

function Card(props) {
    const Datas = props.Datas;
    const housingItems = Datas.map((data) =>
        <div className="card" key={data.id} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(${data.cover})` }}>
            <h2>{data.title}</h2 >
        </div>
    )

    return housingItems
}

export default Card