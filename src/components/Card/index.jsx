import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../utils/styles/Card.css'

function Card(props) {
    let navigate = useNavigate();
    const data = props.data;

    return (
        <div className="card" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)), url(${data.cover})` }} onClick={() => {
            console.log(data)
            navigate(`/housing/${data.id}`, {
                state: { data: data }
            })
        }}>
            <h2>{data.title}</h2 >
        </div>
    )
}

export default Card