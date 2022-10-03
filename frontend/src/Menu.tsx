import { useContext } from "react";
import { Button } from "react-bootstrap";
import {Link, NavLink, useLocation} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebaseSetup";

export default function Menu()
{
    const user = useContext(AuthContext);

    const signOut = async () => {
        await auth.signOut();
      };
    
    const location = useLocation();
    console.log(location);
    if(user){

        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/landing">Outspan Hospital Online Consultation System</NavLink>
                    <div className="collapse navbar-collapse"
                    style={{display:'flex',justifyContent:'space-between'}}
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
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
                                <NavLink className="nav-link" to="/specialties">
                                    Specialties
                                </NavLink>
                                </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin">
                                    Admin
                                </NavLink>
                            </li>
                            
                        </ul>
                        <div className="d-flex">
                                <NavLink className="nav-link" to="/">
                                {user && <Button type="button"
                  variant="danger"
                  className="block" 
                  onClick={signOut}
                  >Sign Out</Button>}
                                </NavLink>  
                         </div>
                    </div>
                </div>
    
            </nav>
        )

    }
    else
    {
        return(
            <>
            </>
        )
    }
    

    
}