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
            </li>
        </ul>
        
        </>
    )
}