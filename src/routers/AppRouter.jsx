import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { TodosScreen } from "../pages/TodosScreen"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { Error404 } from "../pages/Page404"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
        } />

        <Route path='/register' element={ 
          <PublicRoutes>
            <Register/>
          </PublicRoutes>
        } />

        <Route path='/todos' element={
          <PrivateRoutes >
            <TodosScreen/>
          </PrivateRoutes>
        } />


        <Route path='/*' element={<Error404/>} />

      </Routes>
    </BrowserRouter>
  )
}
