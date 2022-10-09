import { Link } from "react-router-dom";


export default function IndexSpecialties()
{
    return(
        <div style={{justifyContent: "space-between" }}>
        <h3>Specialties Page</h3>
        <ul>
        <li><Link className="btn btn-primary w-100 mt-4" to="/specialties/report">View Various Specialties Available</Link></li>
        </ul>
        </div>
    )
}