import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import UserLogin from "./Components/UserLogin";
import AdminLogin from "./Components/AdminLogin";
import AdminSignUp from "./Components/AdminSignUp";
import AdminHomePage from "./Components/AdminHomePage";
import PageNotFound from "./Components/PageNotFound";
import AddBus from "./Components/AddBus";
import ViewBus from "./Components/ViewBus";
import EditBus from "./Components/EditBus";
import Protect from "./Components/Protect";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PageNotFound/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/adminlogin"element={<AdminLogin/>}/>
          <Route path="/userlogin" element={<UserLogin/>}/>
          <Route path="/adminsignup" element={<AdminSignUp/>}/>
          <Route path="/adminhomepage/*" element={<Protect Child={AdminHomePage}/>}/>
          <Route path="/addbus" element={<AddBus/>}/>
          <Route path="/viewbus" element={<ViewBus/>}/>
          <Route path="/editbus/:abc" element={<EditBus/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;