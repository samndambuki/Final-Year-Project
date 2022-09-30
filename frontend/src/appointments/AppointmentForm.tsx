import { Form, Formik, FormikHelpers, yupToFormErrors } from "formik";
import { Link } from "react-router-dom";
import DateField from "../forms/DateField";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import * as Yup from 'yup';
import { appointmentCreationDTO } from "./appointments.models";

export default function AppointmentForm(props:scheduleFormProps)
{
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={
            Yup.object({
                patientName:Yup.string().required('This field is required'),
                doctorName:Yup.string().required('This field is required'),
                patientAppointment:Yup.date().nullable().required('This field is required')
            })
        }
        >
            {(formikProps)=>(
                <Form>
                    <TextField displayName="Patient Name" field="patientName"/>
                    <TextField displayName="Doctor Name" field="doctorName"/>
                    <DateField displayName="Schedule Appointment" field="patientAppointment"/>
                    <Button disabled={formikProps.isSubmitting}
                    type="submit">Save Changes</Button>
                    <Link to="/patients" className="btn btn-secondary">Cancel</Link>
                </Form>
            )}

        </Formik>
    )
}

interface scheduleFormProps
{
    model:appointmentCreationDTO;
    onSubmit(values:appointmentCreationDTO,action:FormikHelpers<appointmentCreationDTO>):void;
}



