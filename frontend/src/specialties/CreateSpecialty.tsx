import axios from "axios";
import { useHistory } from "react-router-dom";
import { specialtyCreationDTO } from "./specialties.models";
import SpecialtyForm from "./SpecialtyForm";

export default function CreateSpecialty()
{

    const history = useHistory();

    async function create(specialty:specialtyCreationDTO)
    {
        try
        {
            await axios.post('https://localhost:7234/api/specialties',specialty)
            history.push('/admin');
        }
        catch(error)
        {
            console.error(error);
        }

    }
    
    return(
        <>
        <h3>Register Specialty</h3>
        
        <SpecialtyForm model={{specialtyName:''}}
        onSubmit={async value => {
            await create(value);
         }}
       
        />
        </>
    )
}