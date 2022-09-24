import { Field, Form, Formik } from "formik";
import Button from "../utils/Button";
import { patientDTO } from "./patients.models";

export default function FilterPatients()
{

    const initialValues:filterPatientsForm = 
    {
        name:'',
        patientId:0
    }

    const patients:patientDTO[] = [{patientId:1,name:'Samuel Ndambuki',email:'sam.ndambuki@outlook.com'
    ,phonenumber:'0797334258',gender:'Male',location:'Nyeri'},
    {patientId:2,name:'Jesse Jowi',email:'jesse@gmail.com'
    ,phonenumber:'0113931336',gender:'Male',location:'Nairobi'}
]


    return(
        <>
        <h3>Generate Patients Report</h3>
        <Formik initialValues={initialValues} 
        onSubmit={values=>console.log(values)}
        >
            {(formikProps)=>(
                <Form>
                    <div className="row gx-3 align-items-center">
                        <div className="col-auto">
                            <input type="text" className="form-control" id="name"
                           placeholder="Name of Patient"
                            {...formikProps.getFieldProps("name")}
                            />
                        </div>
                        <div className="col-auto">
                            <select className="form-select"
                            {...formikProps.getFieldProps("patientId")}
                            > 
                            <option value="0">--Choose a Patient Name--</option>
                            {patients.map(patient=><option key={patient.patientId}
                            value={patient.patientId}
                            >{patient.name}</option>)}
                            </select>
                        </div>
                        <div className="col-auto">
                            <div className="form-check">
                                <Field className="form-check-input"
                                id="registredpatients"
                                name="registeredpatients"
                                type="checkbox"
                                />
                                <label className="form-check-label"
                                htmlFor="registeredpatients"
                                >Registered Patients</label>
                            </div>
                        </div>

                        <div className="col-auto">
                            <Button className="btn btn-primary"
                            onClick={()=>formikProps.submitForm()}
                            >Generate Report</Button>

                            <Button className="btn btn-danger ms-3"
                            onClick={()=>formikProps.setValues(initialValues)}
                            >Clear</Button>
                        </div>
                        
                    </div>
                </Form>
            )}
        </Formik>
        </>
    )
}

interface filterPatientsForm
{
    name:string;
    patientId:number;
}