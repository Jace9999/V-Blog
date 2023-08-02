import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Write } from "./pages/Write";
import { Login } from "./pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>
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
