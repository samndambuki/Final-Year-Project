import { Link} from "react-router-dom";
import Button from "../utils/Button";
import {Formik,Form,Field,ErrorMessage, FormikHelpers} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import { patientCreationDTO } from "./patients.models";


export default function PatientForm(props:patientFormProps)
{
    return(

        <Formik initialValues={
           props.model
        }
        onSubmit={ 
            props.onSubmit
        }
        validationSchema={Yup.object({
            name:Yup.string().required('Please Enter Your Name'),
            email:Yup.string().required('Please Enter Your Email'),
            phonenumber:Yup.string().required('Please Enter Your Phone Number'),
            gender:Yup.string().required('Please Enter Your Gender'),
            location:Yup.string().required('Please enter Your Location')
        })}
        >
            {(formikProps)=>(
                 <Form>
                 <TextField field="name" displayName="Name"/>
                 <TextField field="email" displayName="Email"/>
                 <TextField field="phonenumber" displayName="Phone Number"/>
                 <TextField field="gender" displayName="Gender"/>
                 <TextField field="location" displayName="Location"/>
                
                 <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                 <Link className="btn btn-secondary" to="/patients">Cancel</Link>
             </Form>
            )}
        </Formik>
    )
}

interface patientFormProps
{
    model:patientCreationDTO;
    onSubmit(values:patientCreationDTO,action:FormikHelpers<patientCreationDTO>):void;
}