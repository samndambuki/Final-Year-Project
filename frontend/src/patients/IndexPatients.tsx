import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { patientDTO } from "./patients.models";


export default function IndexPatients()
{
    useEffect(()=>
    {
        axios.get('https://localhost:7234/api/patients/')
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
            </li>
        </ul>
        
        </>
    )
}