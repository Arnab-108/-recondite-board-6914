import { Navigate } from "react-router-dom";
import { authProvider } from "./auth";
import { useContext } from "react";
function PrivateRoute({children}){
    const {isAuth} = useContext(authProvider)

    if(!isAuth){
        return <Navigate to="/signin" />
    }
    return children
}

export default PrivateRoute