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
        path:"/",
        element:<Single/>
      },
      {
        path:"/",
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

const Layout = ()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function App() {
  return (  
    <div>
      <RouterProvider router= {router}/>
    </div>);
}

export default App;
