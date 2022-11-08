import { useEffect } from "react"
import { useLocation } from "react-router"
import '../../utils/styles/Housing.css'

function Housing(props) {
    useEffect(() => { document.title = "Kasa - Logements" })
    const location = useLocation();
    // console.log(props, " props");
    // console.log(location, " useLocation Hook");
    // console.log(location.state.data.title);
    return (
        <div>
            <h1>{location.state.data.title}</h1>
        </div>
    );
}

export default Housing;