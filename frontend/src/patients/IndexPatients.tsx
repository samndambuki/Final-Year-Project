import { Link } from "react-router-dom";


export default function IndexPatients()
{
    return(
        <>
        <h3>Patients Page</h3>
        <Link className="btn btn-primary" to="/patients/create">Register Patient For Consultation</Link>
        </>
    )
}