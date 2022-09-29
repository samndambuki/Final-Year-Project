import { Link} from "react-router-dom";
import Button from "../utils/Button";
import {Formik,Form,Field,ErrorMessage, FormikHelpers} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import { doctorCreationDTO } from "./doctors.models";


export default function DoctorForm(props:doctorFormProps)
{
    return(

        <Formik initialValues={
           props.model
        }
        onSubmit={ 
            props.onSubmit
        }
        validationSchema={Yup.object({
            doctorName:Yup.string().required('Please Enter the Doctors Name'),
            email:Yup.string().required('Please Enter the Doctors Email'),
            phonenumber:Yup.string().required('Please Enter the Doctors Phone Number'),
            gender:Yup.string().required('Please Enter the Doctors Gender'),
            specialtyName:Yup.string().required('Please Enter Your Specialty'),
            
            
        })}
        >
            {(formikProps)=>(
                 <Form>
                 <TextField field="doctorName" displayName="Name"/>
                 <TextField field="email" displayName="Email"/>
                 <TextField field="phonenumber" displayName="Phone Number"/>
                 <TextField field="gender" displayName="Gender"/>
                 <TextField field="specialtyName" displayName="SpecialtyName"/>

                
                 <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                 <Link className="btn btn-secondary" to="/doctors">Cancel</Link>
             </Form>
            )}
        </Formik>
    )
}

interface doctorFormProps
{
    model:doctorCreationDTO;
    onSubmit(values:doctorCreationDTO,action:FormikHelpers<doctorCreationDTO>):void;
}