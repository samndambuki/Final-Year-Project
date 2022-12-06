import './App.css';
import Menu from './Menu';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import routes from './route-config';
import { useEffect, useState } from 'react';
import AuthForm from './auth/AuthForm';
import background from './background/background.jpg';
import {MantineProvider} from "@mantine/core"
import { ContextModalProps, ModalsProvider } from '@mantine/modals';
import { Text, Button as MantineButton } from '@mantine/core';
import bgImage from "./background/background.jpg"

const TestModal = ({ context, id, innerProps }: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="lg">{innerProps.modalBody}</Text>
    <MantineButton fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close
    </MantineButton>
  </>
);

function App() {

  return (
    <BrowserRouter>
   <MantineProvider>
     <ModalsProvider modals={{ demonstration: TestModal }}>
       <Menu/>
       <img src={bgImage} style={{width: "100vw", height: "300px", objectFit: "cover"}} />
       <div>
        <Switch>
          {routes.map(route=>
          <Route key={route.path} path={route.path} exact={route.exact}>
                 <route.component />
          </Route>)}
        </Switch>
       </div>
       <footer className='bd-footer py-5 mt-5 bg-light'>
        <div className='container'>
          Outspan Hospital Online Consultation System {new Date().getFullYear().toString()}
        </div>
       </footer>
     </ModalsProvider>
   </MantineProvider>
     </BrowserRouter>
  );
}

export default App;
