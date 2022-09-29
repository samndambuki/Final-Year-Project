import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import DoctorForm from "./DoctorForm";
import { doctorCreationDTO } from "./doctors.models";

export default function CreateDoctor()
{

    const history = useHistory();

    async function create(doctor:doctorCreationDTO)
    {
        try
        {
            await axios.post('https://localhost:7234/api/doctors',doctor)
            history.push('/doctors');
        }
        catch(error)
        {
            console.error(error);
        }

    }


    return(
        <>
        <h3>Register Doctor To Offer Consultation</h3>
        <DoctorForm model={{doctorName:'',specialtyName:'',email:'',phonenumber:'',gender:''}}
         onSubmit={async value => {
            await create(value);
         }}
        />
        </>
    )
}