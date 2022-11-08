import '../../utils/styles/Collapse.css'
import { useState, useEffect, useRef } from 'react';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)

    const collapseContents = props.collapseContents;
    // let clickedElementId = e.target.parentElement.id;
    const clickedElementClass = "open";

    // collapseContents.forEach(collapseContent => {
    //     if (collapseContent.id === clickedElementId) console.log(e.target.parentElement)
    // })

    // return (
    //     collapseContents.map((collapseContent, index) =>
    //         <div className="collapse" key={`${collapseContent.text}-${index}`} id={index}>
    //             <div className='collapse-button'>
    //                 {collapseContent.text} <span className="fa-solid fa-angle-down select-arrow"></span>
    //             </div>
    //             <div className="collapse-content" style={{ display: "block" }}>{collapseContent.content}</div>
    //         </div>
    //     )
    // )
    // console.log(clickedElementId, props.clickedElementId);

    return isOpen ? (
        collapseContents.map((collapseContent, index) =>
            <div className="collapse open" key={`${collapseContent.text}-${index}`} id={collapseContent.id} onClick={(e) => {
                // console.log(e.target)
                // setIsOpen(false)
                // console.log(isOpen, setIsOpen)
                // console.log(collapseContent.id, e.target.parentElement.id, e.target.parentElement)
                if (collapseContent.id === parseInt(e.target.parentElement.id)) {
                    console.log(e.target.parentElement)
                    setIsOpen(false)
                    e.target.parentElement.classList.add("open")
                }
            }}>
                <div className='collapse-button'>
                    {collapseContent.text} <span className="fa-solid fa-angle-down select-arrow"></span>
                </div>
                <div className="collapse-content" style={{ display: "block" }}>{collapseContent.content}</div>
            </div>
        )
    ) : (
        collapseContents.map((collapseContent, index) =>
            <div className="collapse" key={`${collapseContent.text}-${index}`} id={collapseContent.id} onClick={(e) => {
                console.log(collapseContent.id === parseInt(e.target.parentElement.id))
                // setIsOpen(true)
                // console.log(clickedElementId)
                // console.log(isOpen, setIsOpen)
                if (collapseContent.id === parseInt(e.target.parentElement.id)) {
                    console.log(e.target.parentElement)
                    setIsOpen(true)
                    e.target.parentElement.classList.remove("open")
                }
            }}>
                <div className='collapse-button'>
                    {collapseContent.text} <span className="fa-solid fa-angle-down select-arrow"></span>
                </div>
                <div className="collapse-content" style={{ display: "none" }}>{collapseContent.content}</div>
            </div>
        )
    )

    // return collapseDivOpen
}

export default Collapse