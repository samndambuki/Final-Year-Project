import { useFormikContext } from "formik";

export default function TimeField(props:timeFieldProps)
{
    const showdate = new Date();

    const {values,validateForm,touched,errors} = useFormikContext<any>();

    return(
        <div className="mb-3">
            <label htmlFor={props.field}>{props.displayName}</label>
            <input type="time" className="form-control"
            id={props.field}
            name={props.field}
            //defaultValue={values[props.field]?.toLocaleTimeString('en-CA')}
            onChange={e=>
                {
                    const date = e.currentTarget.value;
                    //const displaytime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

                    //values[props.field] = displaytime;
                    values[props.field] = date;
                    console.log(date);
                    validateForm();
                }}
            />
            {touched[props.field] && errors[props.field] ? 
        <div className="text-danger">{errors[props.field]?.toString()}</div>:null}
        </div>
    )
}

interface timeFieldProps
{
    field:string;
    displayName:string;
}