import { Link, useHistory} from "react-router-dom";
import Button from "../utils/Button";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import PatientForm from "./PatientForm";
import { patientCreationDTO } from "./patients.models";
import axios from "axios";


export default function CreatePatient()
{
    const history = useHistory();

    async function create(patient:patientCreationDTO)
    {
        try
        {
            await axios.post('https://localhost:7234/api/patients',patient)
            history.push('/patients');
        }
        catch(error)
        {
            console.error(error);
        }

    }

    return(
        <>
        <h3>Register Patient For Consultation</h3>
        <PatientForm model={{patientName:'',email:'',phoneNumber:'',gender:'',location:''}}
        onSubmit={async value => {
           await create(value);
        }}
        />
        </>
    )
}