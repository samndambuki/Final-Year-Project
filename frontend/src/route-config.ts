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

const routes = 
[
    {path:'/patients', component:IndexPatients, exact:true},
    {path:'/patients/create', component:CreatePatient},
    {path:'/patients/edit/:id(\\d+)', component:EditPatient},
    {path:'/patients/filter', component:FilterPatients},

    {path:'/doctors', component:IndexDoctors, exact:true},
    {path:'/doctors/create', component:CreateDoctor},
    {path:'/doctors/edit/:id(\\d+)', component:EditDoctor},

    {path:'/schedules', component:IndexSchedules, exact:true},
    {path:'/schedules/create', component:CreateSchedule},
    {path:'/schedules/edit/:id(\\d+)', component:EditSchedule},

    {path:'/specialties', component:IndexSpecialties, exact:true},
    {path:'/specialties/create', component:CreateSpecialty},
    {path:'/specialties/edit/:id(\\d+)', component:EditSpecialty},

    {path:'/', component:LandingPage, exact:true},
    {path:'*',component:RedirectToLandingPage}
];

export default routes;