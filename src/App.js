import Api from './API/Api';
import Header from './API/Header';
import Home from "./View/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NavLink from './API/NavLink';
import Mobile from './API/Mobile';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavLink />,
      children: [
        {
          path: "/web",
          element: <Api />,
        },

        {
          path: "/moblie",
          element: <Mobile />
        },
      ]
    },

    {
      path: "*",
      element: <h1>NOT FOUND AGAIN</h1>
    }
  ]);
  return (
    <div className="App ">


      <RouterProvider router={router} />

    </div>
  );
}

export default App;
