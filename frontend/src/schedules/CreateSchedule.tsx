import axios from "axios";
import { useHistory } from "react-router-dom";
import ScheduleForm from "./ScheduleForm";
import { scheduleCreationDTO } from "./schedules.models";

export default function CreateSchedule()
{
    const history = useHistory();

    async function create(schedule:scheduleCreationDTO)
    {
        try
        {
            await axios.post('https://localhost:7234/api/schedules',schedule)
            history.push('/doctors');
        }
        catch(error)
        {
            console.error(error);
        }

    }
    return(
        <>
        <h3>Register Doctors Schedule</h3>
        <ScheduleForm model={{doctorName:'',availabilityDate:undefined,availabilityTime:undefined}}
         onSubmit={async value => {
            await create(value);
         }}
        />
        </>
    )
}