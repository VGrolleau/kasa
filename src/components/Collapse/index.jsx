import '../../utils/styles/Collapse.css'
import { useState } from 'react';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)

    const collapseContents = props.collapseContents;
    const collapseDivOpen = collapseContents.map((collapseContent) =>
        <div className="collapse">
            <button className='collapse-button' key={collapseContent.id} onClick={(e) => {
                console.log(e.target)
                setIsOpen(false)
            }}>
                {collapseContent.text} <span className="fa-solid fa-angle-down select-arrow"></span>
            </button>
            <p className="collapse-content" style={{ display: "block" }}>{collapseContent.content}</p>
        </div>
    )
    const collapseDivClose = collapseContents.map((collapseContent) =>
        <div className="collapse">
            <button className='collapse-button' key={collapseContent.id} onClick={() => setIsOpen(true)}>
                {collapseContent.text} <span className="fa-solid fa-angle-down select-arrow"></span>
            </button>
            <p className="collapse-content" style={{ display: "none" }}>{collapseContent.content}</p>
        </div>
    )

    return isOpen ? collapseDivOpen : collapseDivClose
    // return collapseDivOpen
}

export default Collapse