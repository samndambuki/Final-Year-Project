import ScheduleForm from "./ScheduleForm";

export default function EditSchedule()
{
    return(
        <>
        <h3>Edit Schedule</h3>
        <ScheduleForm model={{doctorName:'Samuel Ndambuki',
        availability:new Date('1996-06-01T00:00:00')}}
        onSubmit={values=>console.log(values)}
        />
        </>
    )
}