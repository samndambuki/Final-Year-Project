import ScheduleForm from "./ScheduleForm";

export default function CreateSchedule()
{
    return(
        <>
        <h3>Register Doctors Schedule</h3>
        <ScheduleForm model={{name:'',availability:undefined}}
        onSubmit={values=>console.log(values)}
        />
        </>
    )
}