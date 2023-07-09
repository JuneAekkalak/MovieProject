import "./App.css";
import * as React from "react";
import Signin from "./screen/signin";
import Signup from "./screen/signup";
import Home from "./screen/home";
import Contact from "./screen/contact";
import Favorite from "./screen/favorite";
import Navbar from "./component/nav";
import PhoneDetail from "./screen/phone_detail"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <div>
      <Navbar/>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/favorite" element={<Favorite />} />
        <Route path="/phone-detail" element={<PhoneDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
