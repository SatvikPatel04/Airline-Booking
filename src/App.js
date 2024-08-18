//Frontend
import React from 'react';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import './App.css';
import Options from './Pages/options';
import HomePage from './Pages/home-page';
import About from './Pages/about';
import Booking from './Pages/booking';
import BoardPass from './Pages/boarding-pass';
import SignIn from './Pages/signup';
import Options2 from './Pages/options2';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "options",
      element: <Options/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "booking",
      element: <Booking/>
    },
    {
      path: "boarding-pass",
      element: <BoardPass/>
    },
    {
      path : "signup",
      element: <SignIn/>
    },
    {
      path : "options2",
      element : <Options2/>
    }
    
  ]);

  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;