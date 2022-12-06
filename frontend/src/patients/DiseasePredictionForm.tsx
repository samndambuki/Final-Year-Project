import { Link} from "react-router-dom";
import Button from "../utils/Button";
import {Formik,Form,Field,ErrorMessage, FormikHelpers} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import { diseasePredictionDTO } from "./disease.models";


export default function DiseasePredictionForm(props:diseasepredictionFormProps)
{
    return(

        <Formik initialValues={
           props.model
        }
        onSubmit={() => alert("hello")
        }
        validationSchema={Yup.object({
            diseaseName:Yup.string().required('Please Enter the symptoms'),
        })}
        >
            {(formikProps)=>(
                 <Form>
                 <TextField field="symptomOne" displayName="Enter Symptom Name"/>
                 <TextField field="symptomTwo" displayName="Enter Symptom Name"/>
                 <TextField field="symptomThree" displayName="Enter Symptom Name"/>

                 <Button disabled={formikProps.isSubmitting} type='submit' onClick={() => props.onSubmit(formikProps.values)}>Predict Disease</Button>
                 <Link className="btn btn-secondary" to="/patients">Cancel</Link>
             </Form>
            )}
        </Formik>
    )
}

interface diseasepredictionFormProps
{
    model:diseasePredictionDTO;
    onSubmit(values:diseasePredictionDTO):void;
}