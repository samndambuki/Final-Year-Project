import axios from "axios";
import { useHistory } from "react-router-dom";
import AppointmentForm from "./AppointmentForm";
import { appointmentCreationDTO } from "./appointments.models";

export default function CreateAppointment()
{
    const history = useHistory();

    async function create(appointment:appointmentCreationDTO)
    {
        try
        {
            await axios.post('https://localhost:7234/api/appointments',appointment)
            history.push('/patients');
        }
        catch(error)
        {
            console.error(error);
        }

    }
    return(
        <>
        <h3> Patients Appointments</h3>
        <AppointmentForm model={{patientName:'',doctorName:'',patientAppointment:undefined}}
        onSubmit={async value => {
            await create(value);
         }}
         
        />
        </>
    )
}