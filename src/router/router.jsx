import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import OurMenu from "../pages/ourmenu/OurMenu";
import Ourshop from "../pages/ourshop/Ourshop";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Contact from "../pages/contact/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Additem from "../shared component/admin/additem/Additem";
import Manageitem from "../shared component/admin/manageitem/Manageitem";
import Updateitem from "../shared component/admin/manageitem/Updateitem";
import Allusers from "../shared component/admin/allusers/Allusers";
import UserpaymentHistory from "../shared component/user/paymenthistory/UserpaymentHistory";
import Cart from "../shared component/user/cart/Cart";
 
  
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
        },{
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    },{
      path: "/signin",
      element: <Login></Login>
    },{
      path: "/signup",
      element: <SignUp></SignUp>
    },{
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "/dashboard/",
          element: <Dashboard></Dashboard>
        },{
          path: "/dashboard/additem",
          element: <Additem></Additem>
        },{
          path: "/dashboard/manageitem",
          element: <Manageitem></Manageitem>
        },{
          path: "/dashboard/manageitem/update/:id",
          element: <Updateitem></Updateitem>
        },{
          path: "/dashboard/allusers",
          element: <Allusers></Allusers>
        },{
          path: "/dashboard/paymenthistory",
          element: <UserpaymentHistory></UserpaymentHistory>
        },{
          path: "/dashboard/cart",
          element: <Cart></Cart>
        }
      ]
    }
  ]);