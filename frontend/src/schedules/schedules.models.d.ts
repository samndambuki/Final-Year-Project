
export interface scheduleCreationDTO
{
    
    doctorName:string;
    availabilityDate?:string;
    availabilityTime?:string;
}

export interface scheduleDTO
{
    scheduleId:number;
    doctorName:string;
    availabilityDate?:string;
    availabilityTime?:string;
   
}