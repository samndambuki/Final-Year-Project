
export interface appointmentCreationDTO
{
    patientName:string;
    doctorName:string;
    patientAppointment?:Date;
}

export interface appointmentDTO
{
    appointmentId:number;
    patientName:string;
    doctorName:string;
    patientAppointment?:Date;
   
}