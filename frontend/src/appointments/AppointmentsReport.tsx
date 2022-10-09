import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import GenericList from "../utils/GenericList";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import { appointmentDTO } from "./appointments.models";

export default function AppointmentsReport()
{
    const history = useHistory();

    const[appointments,setAppointments] = useState<appointmentDTO[]>();

    const[totalAmountOfPages,setTotalAmountOfPages] = useState(0);

    const[recordsPerPage,setRecordsPerPage] = useState(5);

    const[page,setPage] = useState(1);


    useEffect(() => {
        axios.get('https://localhost:7234/api/appointments',{
            params:{page,recordsPerPage}
        })
        .then((response:AxiosResponse<appointmentDTO[]>)=>{
            const totalAmountOfRecords = 
            parseInt(response.headers['totalamountofrecords'],10);
            setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage));
            setAppointments(response.data);
        })
    },[page,recordsPerPage])
  
    return(
        <>
        <h3>Patients Appointments Report</h3>

        <RecordsPerPageSelect onChange={amountOfRecords =>{
            setPage(1);
            setRecordsPerPage(amountOfRecords);
        }}/>

        <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages}
        onChange={newPage => setPage(newPage)}
        />

        <GenericList list={appointments}>

            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Appointment Id</th>
                    <th>Patient Name</th>
                    <th>Doctor Name</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments?.map(appointment=>
                    <tr key={appointment.appointmentId}>
                        
                        <td>
                            {appointment.appointmentId}
                        </td>

                        <td>
                            {appointment.patientName}
                        </td>

                        <td>
                            {appointment.doctorName}
                        </td>
                        <td>
                            {appointment.appointmentDay?.toString()}
                        </td>
                        <td>
                            {appointment.appointmentTime?.toString()}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

        </GenericList>
        </>
    )

}

