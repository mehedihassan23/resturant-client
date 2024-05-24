import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import OurMenu from "../pages/ourmenu/OurMenu";
import Ourshop from "../pages/ourshop/Ourshop";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
 
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },{
          path: "/menu",
          element: <OurMenu></OurMenu>
        },{
          path: "/shop",
          element: <Ourshop></Ourshop>
        }
      ]
    },{
      path: "/signin",
      element: <Login></Login>
    },{
      path: "/signup",
      element: <SignUp></SignUp>
    }
  ]);