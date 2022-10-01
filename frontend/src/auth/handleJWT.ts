import { authenticationResponse, claim } from "./auth.models";

const tokenKey = 'token';
const expirationKey = 'token-expiration';

export function saveToken(authdata:authenticationResponse)
{
    localStorage.setItem(tokenKey,authdata.token);
    localStorage.setItem(expirationKey,authdata.expiration.toString());
}

export function getClaims():claim[]{
    const token = localStorage.getItem(tokenKey);

    if(!token)
    {
        return [];
    }

    const expiration = localStorage.getItem(expirationKey)!;
    const expirationDate = new Date(expiration);

    if(expirationDate <= new Date())
    {
        logout();
        return [];
    }

    const dataToken = JSON.parse(atob(token.split('.')[1]));
    const response: claim[] = [];
    for (const property in dataToken)
    {
        response.push({name:property,value:dataToken[property]});
    }

    return response;
    
}

export function logout()
{
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(expirationKey);
}