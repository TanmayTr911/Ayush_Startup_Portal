import React from "react";
import RegForm from "./components/startupRegForm";
import InvestorDetails from "./components/invetsorRegForm";
import LoginPage from "./components/loginPage";
import HomePage from "./components/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/startupProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register/startup",
    element: <RegForm />,
  },
  {
    path: "/register/investor",
    element: <InvestorDetails />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/startupProfile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
