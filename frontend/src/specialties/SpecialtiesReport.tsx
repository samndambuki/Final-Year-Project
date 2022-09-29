import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import GenericList from "../utils/GenericList";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import { specialtyDTO } from "./specialties.models";

export default function PatientsReport()
{
    const history = useHistory();

    const[specialties,setSpecialties] = useState<specialtyDTO[]>();

    const[totalAmountOfPages,setTotalAmountOfPages] = useState(0);

    const[recordsPerPage,setRecordsPerPage] = useState(5);

    const[page,setPage] = useState(1);


    useEffect(() => {
        axios.get('https://localhost:7234/api/specialties',{
            params:{page,recordsPerPage}
        })
        .then((response:AxiosResponse<specialtyDTO[]>)=>{
            const totalAmountOfRecords = 
            parseInt(response.headers['totalamountofrecords'],10);
            setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage));
            setSpecialties(response.data);
        })
    },[page,recordsPerPage])
  
    return(
        <>
        <h3>Specialties Report</h3>

        <RecordsPerPageSelect onChange={amountOfRecords =>{
            setPage(1);
            setRecordsPerPage(amountOfRecords);
        }}/>

        <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages}
        onChange={newPage => setPage(newPage)}
        />

        <GenericList list={specialties}>

            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Specialty Id</th>
                    <th>Specialty Name</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {specialties?.map(specialty=>
                    <tr key={specialty.specialtyId}>
                        
                        <td>
                            {specialty.specialtyId}
                        </td>
                        <td>
                            {specialty.specialtyName}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

        </GenericList>
        </>
    )

}

