import CreateDoctor from "./doctors/CreateDoctor";
import EditDoctor from "./doctors/EditDoctor";
import FilterPatients from "./patients/FilterPatients";
import IndexDoctors from "./doctors/IndexDoctors";
import LandingPage from "./LandingPage";
import CreatePatient from "./patients/CreatePatient";
import EditPatient from "./patients/EditPatient";
import IndexPatients from "./patients/IndexPatients";
import CreateSchedule from "./schedules/CreateSchedule";
import EditSchedule from "./schedules/EditSchedule";
import IndexSchedules from "./schedules/IndexSchedules";
import CreateSpecialty from "./specialties/CreateSpecialty";
import EditSpecialty from "./specialties/EditSpecialty";
import IndexSpecialties from "./specialties/IndexSpecialties";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";
import PatientsReport from "./patients/PatientsReport";
import IndexAdmin from "./admin/IndexAdmin";
import SpecialtiesReport from "./specialties/SpecialtiesReport";
import SchedulesReport from "./schedules/SchedulesReport";
import AppointmentsReport from "./appointments/AppointmentsReport";
import CreateAppointment from "./appointments/CreateAppointment";

const routes = 
[
    {path:'/patients', component:IndexPatients, exact:true},
    {path:'/patients/create', component:CreatePatient},
    {path:'/patients/edit/:id(\\d+)', component:EditPatient},
    {path:'/patients/filter', component:FilterPatients},
    {path:'/patients/report',component:PatientsReport},
    {path:'/appointments/create', component:CreateAppointment},
    {path:'/appointments/report',component:AppointmentsReport},


    {path:'/doctors', component:IndexDoctors, exact:true},
    {path:'/doctors/create', component:CreateDoctor},
    {path:'/doctors/edit/:id(\\d+)', component:EditDoctor},

    {path:'/schedules', component:IndexSchedules, exact:true},
    {path:'/schedules/create', component:CreateSchedule},
    {path:'/schedules/edit/:id(\\d+)', component:EditSchedule},
    {path:'/schedules/report',component:SchedulesReport},


    {path:'/specialties', component:IndexSpecialties, exact:true},
    {path:'/specialties/create', component:CreateSpecialty},
    {path:'/specialties/edit/:id(\\d+)', component:EditSpecialty},
    {path:'/specialties/report',component:SpecialtiesReport},

    {path:'/admin', component:IndexAdmin, exact:true},

    {path:'/', component:LandingPage, exact:true},
    {path:'*',component:RedirectToLandingPage}
];

export default routes;