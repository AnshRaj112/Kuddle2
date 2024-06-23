import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import Sidebar from "./layouts/Sidebar/Sidebar";
import Meettxt from "./components/meettxt/meettxt";
import Hero from "./components/hero/hero";
import Whychoose from "./components/whychoose/whychoose";
import Meetcom from "./components/meetcom/meetcom";
import Contact from "./components/contact/contact";
import NavbarPro from "./layouts/NavbarPro/NavbarPro";
import Sidebarmob from "./layouts/Sidebarmob/Sidebarmob";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import EditProfile from "./pages/Profile/EditProfile";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar />
      <Sidebar /> */}
      <Routes>
         <Route path="/" element={<Hero />} />
       {/* <Route path="/meettxt" element={<Meettxt />} />
        <Route path="/whychoose" element={<Whychoose />} />
        <Route path="/meetcom" element={<Meetcom />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}