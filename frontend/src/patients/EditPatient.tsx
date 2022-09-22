import { useParams } from "react-router-dom";
import PatientForm from "./PatientForm";

export default function EditPatient()
{
    const {id}: any = useParams();
    return(
        <>
        <h3>Edit Patient Details</h3>
        <PatientForm model={{name:'Samuel Ndambuki',email:'sam.ndambuki08@gmail.com',phonenumber:'0797334258',gender:'Male',location:'Nyeri'}}
        onSubmit={async value => {
            //when the form is posted
            await new Promise(r => setTimeout(r,3000));
            console.log(id);
            console.log(value);
        }}
        />
        </>
    )
}