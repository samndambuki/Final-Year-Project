import React from "react";
import {Button} from '@material-ui/core'
import firebase from "firebase/compat/app";
import { auth } from "../firebaseSetup";


function SignIn(){
    function signInWithGoogle()
    {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return(
        <div>
            <Button onClick={signInWithGoogle}>SignIn with Google</Button>
        </div>
    )
}

export default SignIn