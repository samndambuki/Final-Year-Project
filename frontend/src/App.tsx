import './App.css';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from './route-config';
import { useState } from 'react';
import { claim } from './auth/auth.models';
import AuthenticationContext from './auth/AuthenticationContext';

function App() {

  const [claims,setClaims] = useState<claim[]>([
    {name:'email',value:'sam@gmail.com'}
  ]);

  function isAdmin()
  {
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1;
  }

  

  return (
   
   <BrowserRouter>
   <AuthenticationContext.Provider value={{claims,update:setClaims}}>
   <Menu/>
   <div>
    <Switch>
      {routes.map(route=>
      <Route key={route.path} path={route.path} exact={route.exact}>
        {route.isAdmin && !isAdmin() ? <>
        You are not allowed to see this page
        </>:  <route.component/>}
      </Route>)}
    </Switch>
   </div>
   <footer className='bd-footer py-5 mt-5 bg-light'>
    <div className='container'>
      Outspan Hospital Online Consultation System {new Date().getFullYear().toString()}
    </div>
   </footer>
   </AuthenticationContext.Provider>
   </BrowserRouter>
 
  );
}

export default App;
