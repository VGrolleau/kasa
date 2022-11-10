import '../../utils/styles/Rating.css'

function Rating(props) {
    const ratingNumber = props.rating
    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="stars">
            {stars.map((star) => (
                <span className={`fa-solid fa-star ${star <= parseInt(ratingNumber) ? "salmon" : "grey"}`} key={star}></span>
            ))}
        </div>
    )
}

export default Rating