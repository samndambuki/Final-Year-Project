import { Link } from "react-router-dom";


export default function IndexDoctors()
{
    return(
        <div style={{justifyContent: "space-between" }}>
        <h3>Doctors Page</h3>
        
        <ul>
            <li><Link className="btn btn-primary w-100" to="/doctors/create">Register to Offer Consultation</Link> </li>
            <li><Link className="btn btn-primary w-100 mt-4"  to="/schedules/create">Create Schedule</Link></li>
            <li><Link className="btn btn-primary w-100 mt-4" to="/patients/report">Generate Patients Report</Link></li>
            <li><Link className="btn btn-primary w-100 mt-4" to="/appointments/report">View Patients Appointments</Link></li>
        </ul>
        
        </div>
    )
}