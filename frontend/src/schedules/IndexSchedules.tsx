import { Link } from "react-router-dom";


export default function IndexSchedules()
{
    return(
        <>
        <h3>Schedules Page</h3>
        <ul>
            <li>
            <Link className="btn btn-primary w-100" to="/schedules/report">View Doctors Schedules</Link>
            </li>
        </ul>
        
        </>
    )
}