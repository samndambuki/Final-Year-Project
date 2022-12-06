import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { patientDTO } from "./patients.models";
import { urlPatients } from "../endpoints";


export default function IndexPatients()
{
    useEffect(()=>
    {
        axios.get(urlPatients)
        .then((response:AxiosResponse<patientDTO[]>)=>{
            console.log(response.data);
        })
    },[])   
    return(
        <>
        <h3>Patients Page</h3>
        <ul>
            <li>
            <Link className="btn btn-primary w-100" to="/patients/create">Register Patient For Consultation</Link>
            <li><Link className="btn btn-primary w-100 mt-4"  to="/appointments/create">Schedule Appointment</Link></li>
            <li><Link className="btn btn-primary w-100 mt-4"  to="/disease/prediction">Predict Disease</Link></li>
            </li>
        </ul>
        
        </>
    )
}