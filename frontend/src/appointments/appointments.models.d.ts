
export interface appointmentCreationDTO
{
    patientName:string;
    doctorName:string;
    appointmentDay?:string;
    appointmentTime?:string;
}

export interface appointmentDTO
{
    appointmentId:number;
    patientName:string;
    doctorName:string;
    appointmentDay?:string;
    appointmentTime?:string;
}