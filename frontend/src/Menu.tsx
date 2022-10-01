import { useContext } from "react";
import {Link, NavLink} from "react-router-dom";
import AuthenticationContext from "./auth/AuthenticationContext";
import Authorized from "./auth/Authorized";
import { logout } from "./auth/handleJWT";
import Button from "./utils/Button";

export default function Menu()
{
    const {update,claims} = useContext(AuthenticationContext);

    function getUserEmail():string{
    return claims.filter(x=>x.name === "email")[0]?.value;
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Outspan Hospital Online Consultation System</NavLink>
                <div className="collapse navbar-collapse"
                style={{display:'flex',justifyContent:'space-between'}}
                >
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
                    <div className="d-flex">
                                <Authorized
                                authorized={<>
                                <span className="nav-link">Hello, {getUserEmail()}</span>
                                <Button
                                onClick={()=>{
                                    logout();
                                    update([]);
                                }}
                                className="nav-link btn btn-link">Logout</Button>
                                </>}
                                notAuthorized={<>
                                <Link to="/register"
                                className="nav-link btn btn-link">Register</Link>
                                <Link to="/login"
                                className="nav-link btn btn-link">Login</Link>
                                </>}

                                />
                            </div>
                </div>
            </div>

        </nav>
    )
}