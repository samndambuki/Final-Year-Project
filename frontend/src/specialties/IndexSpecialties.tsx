import { Link } from "react-router-dom";


export default function IndexSpecialties()
{
    return(
        <>
        <h3>Specialties</h3>
        <Link className="btn btn-primary" to="/specialties/create">Register Doctor's Specialty</Link>
        </>
    )
}