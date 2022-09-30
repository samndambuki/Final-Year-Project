import {NavLink} from "react-router-dom";
import Authorized from "./auth/Authorized";

export default function Menu()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Outspan Hospital Online Consultation System</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <Authorized
                    role="admin"
                            authorized={
                            <>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/patients">
                                Patients
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/doctors">
                                Doctors
                            </NavLink>
                        </li>
                      
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/schedules">
                                Schedules
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin">
                                Admin
                            </NavLink>
                        </li>
                            </>}
                            />

                            <li className="nav-item">
                            <NavLink className="nav-link" to="/specialties">
                                Specialties
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}