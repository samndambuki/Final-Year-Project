import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import GenericList from "../utils/GenericList";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import { patientDTO } from "./patients.models";

export default function PatientsReport()
{
    const history = useHistory();

    const[patients,setPatients] = useState<patientDTO[]>();

    const[totalAmountOfPages,setTotalAmountOfPages] = useState(0);

    const[recordsPerPage,setRecordsPerPage] = useState(5);

    const[page,setPage] = useState(1);


    useEffect(() => {
        axios.get('https://localhost:7234/api/patients',{
            params:{page,recordsPerPage}
        })
        .then((response:AxiosResponse<patientDTO[]>)=>{
            const totalAmountOfRecords = 
            parseInt(response.headers['totalamountofrecords'],10);
            setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage));
            setPatients(response.data);
        })
    },[page,recordsPerPage])
  
    return(
        <>
        <h3>Patients Report</h3>

        <RecordsPerPageSelect onChange={amountOfRecords =>{
            setPage(1);
            setRecordsPerPage(amountOfRecords);
        }}/>

        <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages}
        onChange={newPage => setPage(newPage)}
        />

        <GenericList list={patients}>

            <table className="table table-striped">
                <thead>

                    <tr>

                    <th></th>
                    <th>Patient Id</th>
                    <th>Patient Name</th>
                    <th>Patient Email</th>
                    <th>Patient Gender </th>
                    <th>Patient Location</th>

                    </tr>
                    
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

