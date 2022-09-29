import { Link } from "react-router-dom";


export default function IndexAdmin()
{
    return(
        <div style={{justifyContent: "space-between" }}>
        <h3>Admins Page</h3>
        
        <ul>
            <li><Link className="btn btn-primary w-100 mt-4" to="/specialties/create">Register Specialties</Link></li>
        </ul>
        
        </div>
    )
}