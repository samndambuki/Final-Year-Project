import { Link} from "react-router-dom";
import Button from "../utils/Button";
import {Formik,Form,Field,ErrorMessage, FormikHelpers} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import { specialtyCreationDTO } from "./specialties.models";


export default function SpeciatyForm(props:specialtyFormProps)
{
    return(

        <Formik initialValues={
           props.model
        }
        onSubmit={ 
            props.onSubmit
        }
        validationSchema={Yup.object({
            specialtyname:Yup.string().required('Please Enter the Specialty Name'),
            doctorname:Yup.string().required('Please Enter the Doctors Name'),
         
        })}
        >
            {(formikProps)=>(
                 <Form>
                 <TextField field="specialtyname" displayName="Specialty Name"/>
                 <TextField field="doctorname" displayName="Doctor Name"/>
                 
                
                 <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                 <Link className="btn btn-secondary" to="/doctors">Cancel</Link>
             </Form>
            )}
        </Formik>
    )
}

interface specialtyFormProps
{
    model:specialtyCreationDTO;
    onSubmit(values:specialtyCreationDTO,action:FormikHelpers<specialtyCreationDTO>):void;
}