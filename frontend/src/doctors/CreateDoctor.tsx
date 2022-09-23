import { Link } from "react-router-dom";
import DoctorForm from "./DoctorForm";

export default function CreateDoctor()
{
    return(
        <>
        <h3>Register Doctor To Offer Consultation</h3>
        <DoctorForm model={{name:'',email:'',phonenumber:'',gender:''}}
        onSubmit={async value => {
            //when the form is posted
            await new Promise(r => setTimeout(r,3000));
            console.log(value);
        }}
        />
        </>
    )
}