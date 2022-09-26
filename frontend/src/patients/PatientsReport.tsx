import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import GenericList from "../utils/GenericList";
import { patientDTO } from "./patients.models";

export default function PatientsReport()
{
    const history = useHistory();

    const[patients,setPatients] = useState<patientDTO[]>();

    useEffect(() => {
        axios.get('https://localhost:7234/api/patients')
        .then((response:AxiosResponse<patientDTO[]>)=>{
            setPatients(response.data);
        })
    }
    )
  
       

    return(
        <>
        <h3>Patients Report</h3>
        <GenericList list={patients}>

            <table className="table table-striped">
                <thead>
                    <th></th>
                    <th>Patient Id</th>
                    <th>Patient Name</th>
                    <th>Patient Email</th>
                    <th>Patient Gender </th>
                    <th>Patient Location</th>
                </thead>
                <tbody>
                    {patients?.map(patient=>
                    <tr key={patient.patientId}>
                        <td>
                            {patient.patientId}
                        </td>
                        <td>
                            {patient.name}
                        </td>
                        <td>
                            {patient.email}
                        </td>

                        <td>
                            {patient.gender}
                        </td>
                        <td>
                            {patient.location}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

        </GenericList>
        </>
    )

}

