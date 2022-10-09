import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../firebaseSetup";
import SignIn from './SignIn';
import Chat from './Chat';

function IndexChat(){
    const [user] = useAuthState(auth)
    return(
        <>
        {user ?  <Chat/> :  <SignIn/>}
        </>
    );
}

export default IndexChat;