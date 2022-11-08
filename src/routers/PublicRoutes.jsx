import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const PublicRoutes = ({children}) => {

  const { user } = useContext(AuthContext)
  
  return user.isLogged
          ? <Navigate to='/todos' />
          : children
}
