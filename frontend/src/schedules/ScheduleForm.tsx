import { Form, Formik, FormikHelpers, yupToFormErrors } from "formik";
import { Link } from "react-router-dom";
import DateField from "../forms/DateField";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { scheduleCreationDTO } from "./schedules.models";
import * as Yup from 'yup';

export default function ScheduleForm(props:scheduleFormProps)
{
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={
            Yup.object({
                name:Yup.string().required('This field is required'),
                availability:Yup.date().nullable().required('This field is required')
            })
        }
        >
            {(formikProps)=>(
                <Form>
                    <TextField displayName="Name" field="name"/>
                    <DateField displayName="Schedule Appointment" field="availability"/>
                    <Button disabled={formikProps.isSubmitting}
                    type="submit">Save Changes</Button>
                    <Link to="/schedules" className="btn btn-secondary">Cancel</Link>
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



