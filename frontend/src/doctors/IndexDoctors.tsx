import { Link } from "react-router-dom";


export default function IndexDocotrs()
{
    return(
        <div className="">
        <h3>Doctors Page</h3>
        <Link className="btn btn-primary" to="/doctors/create">Register Doctor to offer Consultation</Link> 
        <Link className="btn btn-primary" to="/schedules/create">Register Doctors Schedule</Link>
        
        </div>
    )
}