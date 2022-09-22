import { Link } from "react-router-dom";


export default function IndexSchedules()
{
    return(
        <>
        <h3>Schedules</h3>
        <Link className="btn btn-primary" to="/schedules/create">Register Doctors Schedule</Link>
        </>
    )
}