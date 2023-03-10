import HeaderComp from "./Components/Header/header";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AdminView from "./Views/AdminView/adminView";
import HomeBG from "./Components/HomeBG/homeBg";
import MainCard from "./Components/MainCard/mainCard";
import MainView from "./Views/MainView/mainView";
import SignUpView from "./Views/SignUpView/signView";
import LogInView from "./Views/LogInView/loginView";
import SignAdminView from "./Views/SignUpView/signAdminView";
import SignTenantView from "./Views/SignUpView/signTenantView";
import NewAddView from "./Views/NewAddView/newAddView";

import ProfileCard from "./Components/ProfileCard/profileCard";
import NewAdd from "./Components/NewAdd/newAdd";
// import {useState} from 'react';

function App() {

  const [userVar, setUserVar] = useState(false);

  return (
    <div className="App">
      <div className="header-container">
        <HeaderComp user={userVar} setUser={setUserVar} />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomeBG />} />
          <Route path="/rooms" element={<MainView />} />
          <Route path="/rooms/:addID" element={<MainCard />} />
          <Route path="/signup" element={<SignUpView />} />
          <Route path="/signup/admin" element={<SignAdminView />} />
          <Route path="/signup/tenant" element={<SignTenantView />} />
          <Route path="/login" element={<LogInView setUser={setUserVar}/>} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/admin/new-add" element={<NewAddView />} />
        </Routes>
      </div>
      {/* <HomeBG /> */}
      {/* <MainCard /> */}
      {/* <MainView /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <SignUpAdmin />
      <SignUpTenant /> */}
    </div>
  );
}

export default App;
