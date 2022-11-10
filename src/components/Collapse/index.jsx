import '../../utils/styles/Collapse.css'
import { useState } from 'react';
import classNames from 'classnames';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)

    const title = props.title
    const content = props.content;

    return (
        <div className={classNames({ collapse: true, open: isOpen })} onClick={() => { setIsOpen(!isOpen) }}>
            <div className='collapse-button'>
                {title} <span className="fa-solid fa-angle-down select-arrow"></span>
            </div>
            <ul className="collapse-content">{content}</ul>
        </div>
    )
}

export default Collapse