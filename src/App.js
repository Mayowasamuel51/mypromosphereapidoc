import Api from './API/Api';
import Header from './API/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/web",
      element: <Api/>,
    },

    {
      path: "/moblie",
      element:<div>moblie api </div>
    }
  ]);
  return (
    <div className="App ">
      

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
