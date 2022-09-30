import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import GenericList from "../utils/GenericList";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import { scheduleDTO } from "./schedules.models";

export default function SchedulesReport()
{
    const history = useHistory();

    const[schedules,setSchedules] = useState<scheduleDTO[]>();

    const[totalAmountOfPages,setTotalAmountOfPages] = useState(0);

    const[recordsPerPage,setRecordsPerPage] = useState(5);

    const[page,setPage] = useState(1);


    useEffect(() => {
        axios.get('https://localhost:7234/api/schedules',{
            params:{page,recordsPerPage}
        })
        .then((response:AxiosResponse<scheduleDTO[]>)=>{
            const totalAmountOfRecords = 
            parseInt(response.headers['totalamountofrecords'],10);
            setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage));
            setSchedules(response.data);
        })
    },[page,recordsPerPage])
  
    return(
        <>
        <h3>Doctors Schedules Report</h3>

        <RecordsPerPageSelect onChange={amountOfRecords =>{
            setPage(1);
            setRecordsPerPage(amountOfRecords);
        }}/>

        <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages}
        onChange={newPage => setPage(newPage)}
        />

        <GenericList list={schedules}>

            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Schedule Id</th>
                    <th>Docotor Name</th>
                    <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules?.map(schedule=>
                    <tr key={schedule.scheduleId}>
                        
                        <td>
                            {schedule.scheduleId}
                        </td>
                        <td>
                            {schedule.doctorName}
                        </td>
                        <td>
                            {schedule.availability?.toString()}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

        </GenericList>
        </>
    )

}

