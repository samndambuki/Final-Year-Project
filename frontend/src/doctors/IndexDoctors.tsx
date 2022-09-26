import { Link } from "react-router-dom";


export default function IndexDoctors()
{
    return(
        <div style={{justifyContent: "space-between" }}>
        <h3>Doctors Page</h3>
        
        <ul>
            <li><Link className="btn btn-primary w-100" to="/doctors/create">Register Doctor to Offer Consultation</Link> </li>
            <li><Link className="btn btn-primary w-100 mt-4"  to="/schedules/create">Register Doctor's Schedule</Link></li>
            <li><Link className="btn btn-primary w-100 mt-4" to="/specialties/create">Register Doctor's Specialty</Link></li>
            <li><Link className="btn btn-primary w-100 mt-4" to="/patients/report">Generate Patients Report</Link></li>
        </ul>
        
        </div>
    )
}