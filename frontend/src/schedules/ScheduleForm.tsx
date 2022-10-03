import { Form, Formik, FormikHelpers, yupToFormErrors } from "formik";
import { Link } from "react-router-dom";
import DateField from "../forms/DateField";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { scheduleCreationDTO } from "./schedules.models";
import * as Yup from 'yup';
import TimeField from "../forms/TimeField";

export default function ScheduleForm(props:scheduleFormProps)
{
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={
            Yup.object({
                doctorName:Yup.string().required('This field is required'),
                availabilityDate:Yup.string().nullable().required('This field is required'),
                availabilityTime:Yup.string().nullable().required('This field is required')
            })
        }
        >
            {(formikProps)=>(
                <Form>
                    <TextField displayName="Doctor Name" field="doctorName"/>
                    <DateField displayName="Schedule Appointment Date" field="availabilityDate"/>
                    <TimeField displayName="Schedule Appointment Time" field="availabilityTime"/>
                    <Button disabled={formikProps.isSubmitting}
                    type="submit">Save Changes</Button>
                    <Link to="/doctors" className="btn btn-secondary">Cancel</Link>
                </Form>
            )}

        </Formik>
    )
}

interface scheduleFormProps
{
    model:scheduleCreationDTO;
    onSubmit(values:scheduleCreationDTO,action:FormikHelpers<scheduleCreationDTO>):void;
}



