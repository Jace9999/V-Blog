import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom"

import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Write } from "./pages/Write";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const Layout = ()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
       path:"/",
        element:<Home/>
      },
      {
        path:"/single",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      }
  ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/single",
    element: <Single/>
  },
  {
    path: "/write",
    element: <Write/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Home/>
  }
  
]);



function App() {
  return (  
    <div>
      <RouterProvider router= {router}/>
    </div>);
}



export default App;
