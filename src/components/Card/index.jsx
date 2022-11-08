import { useNavigate } from 'react-router-dom';
import '../../utils/styles/Card.css'

function Card(props) {
    let navigate = useNavigate();
    const data = props.data;

    return (
        <div className="card" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(${data.cover})` }} onClick={() => navigate(`/housing/${data.id}`)}>
            <h2>{data.title}</h2 >
        </div>
    )
}

export default Card