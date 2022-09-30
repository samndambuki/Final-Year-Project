import Authorized from "./auth/Authorized";

export default function LandingPage()
{
    return(
        <>

        <Authorized
        authorized={<>You are authorized</>}
        notAuthorized={<>You are not authorized</>}
        role="admin"
        />
        
        </>
    )
}