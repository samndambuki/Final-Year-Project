import { Link, useHistory} from "react-router-dom";
import Button from "../utils/Button";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import PatientForm from "./PatientForm";
import { patientCreationDTO } from "./patients.models";
import axios from "axios";
import { diseasePredictionDTO } from "./disease.models";
import DiseasePredictionForm from "./DiseasePredictionForm";
import { useState } from "react";
import {openContextModal} from "@mantine/modals"
import {Loader} from "@mantine/core"


export default function PredictDisease()
{
    const history = useHistory();
    // const user = useContext(AuthContext);
    const [isLoading, setLoading] = useState(false)
    const [disease, setDisease] = useState("")

    async function create(diseaseprediction:diseasePredictionDTO)
    {
        try
        {
            setLoading(true)
            const symptoms = Object.values(diseaseprediction)
            const url = 'https://sam-model.up.railway.app/predict'
            // const url = 'http://localhost:5000/predict'
            const {data} = await axios.post(url, {
                symptoms
            })
            setLoading(false)
            setDisease(data)
            openContextModal({
                modal: 'demonstration',
                title: 'Disease Prediction Results',
                innerProps: {
                  modalBody:
                    `${data}`
                },
              })
              /**
               * userid
               * username
               * disease
               */
        }
        catch(error)
        {
            console.error(error);
        }

    }

    return(
        <>
        <h3 className="text-red-500">Predict disease based on symptoms</h3>
        <DiseasePredictionForm model={{symptomOne: '', symptomTwo: '', symptomThree: ''}}
        onSubmit={async value => {
           await create(value);
        }}
        />
        </>
    )
}