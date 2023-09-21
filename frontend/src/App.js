import React from "react";
import RegForm from "./components/startupRegForm";
import InvestorDetails from "./components/invetsorRegForm";
import LoginPage from "./components/loginPage";
import HomePage from "./components/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartupProfile from "./components/startupProfile";
import { InvestorProfile } from "./components/investorProfile";
import Opportunities from "./components/Opportunity/Opportunity";
import { Mentor } from "./components/mentorship/mentorship";
import Events from "./components/events/events";
import SuccessStories from "./components/HomePageComponents/successStories";
import Navbar from "./components/HomePageComponents/navbar";

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
    element: <StartupProfile />,
  },
  {
    path: "/investorProfile",
    element: <InvestorProfile />,
  },
  {
    path: "/opportunities",
    element: <Opportunities />,
  },
  {
    path: "/mentorship",
    element: <Mentor />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/successStories",
    element: (
      <>
        <Navbar></Navbar>
        <SuccessStories />
      </>
    ),
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
