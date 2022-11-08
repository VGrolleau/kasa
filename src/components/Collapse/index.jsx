import '../../utils/styles/Collapse.css'
import { useState } from 'react';
import classNames from 'classnames';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)

    const collapseContent = props.collapseContent;

    return (
        <div className={classNames({ collapse: true, open: isOpen })} onClick={() => { setIsOpen(!isOpen) }}>
            <div className='collapse-button'>
                {collapseContent.text} <span className="fa-solid fa-angle-down select-arrow"></span>
            </div>
            <div className="collapse-content">{collapseContent.content}</div>
        </div>
    )
}

export default Collapse