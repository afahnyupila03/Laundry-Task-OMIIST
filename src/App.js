import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import RegistrationSuccessful from "./Components/SignIn/RegistrationSuccessful";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignIn/SignUp";
import Welcome from "./Components/SignIn/Welcome";
import Footer from "./Footer";
import NavbarTab from "./Navbar";

// Firebase


function App() {

  // Login and Logout Controllers
  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(
    () => {
      const loginValues = localStorage.getItem("isLoggedIn");
      if (loginValues === "1") {
        setIsLoggedIn(true);
      }
    }, []
  );

// fireBase Data
const UserLogins = {};

// firebaseSignOut 
const firebaseSignOut = async () => {
  
};

  return (
    <Fragment>
      <NavbarTab onLogOut={handleLogout} onIsLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact={true} path='/sign-in' element={<SignIn  onLogin={handleLogin} />} />
        <Route exact={true} path='/registration-successful' element={<RegistrationSuccessful />} />
        <Route exact={true} path='/sign-up' element={<SignUp onLogin={handleLogin} />} />
        <Route exact={true} path='/welcome' element={<Welcome />} />
        <Route exact={true} path='/about-us' element={<AboutUs />} />
        <Route exact={true} path='/services' element={<Services />} />
        <Route exact={true} path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
