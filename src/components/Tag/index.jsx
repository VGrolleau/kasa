import '../../utils/styles/Tag.css'

function Tag(props) {
    const text = props.text

    return (
        <div className='tag'>
            {text}
        </div>
    )
}

export default Tag