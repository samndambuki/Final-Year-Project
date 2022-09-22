import { Link} from "react-router-dom";
import Button from "../utils/Button";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import PatientForm from "./PatientForm";

export default function CreatePatient()
{
    //const history = useHistory();
    return(
        <>
        <h3>Register Patient For Consultation</h3>
        <PatientForm model={{name:'',email:'',phonenumber:'',gender:'',location:''}}
        onSubmit={async value => {
            //when the form is posted
            await new Promise(r => setTimeout(r,3000));
            console.log(value);
        }}
        />
        </>
    )
}