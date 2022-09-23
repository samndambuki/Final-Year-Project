import SpecialtyForm from "./SpecialtyForm";

export default function CreateSpecialty()
{
    return(
        <>
        <h3>Register Doctors Specialty</h3>
        
        <SpecialtyForm model={{specialtyname:'',doctorname:''}}
        onSubmit={async value => {
            //when the form is posted
            await new Promise(r => setTimeout(r,3000));
            console.log(value);
        }}
        />
        </>
    )
}