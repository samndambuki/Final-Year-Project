import { Link } from "react-router-dom";


export default function IndexDoctors()
{
    return(
        <div className="">
        <h3>Doctors Page</h3>
        <Link className="btn btn-primary" to="/doctors/create">Register Doctor to Offer Consultation</Link> 
        </div>
    )
}