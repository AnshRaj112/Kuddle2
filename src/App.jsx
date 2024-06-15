import React from "react";
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

function App() {
  return (
    <>
   <NavbarPro/> 
   <Hero/> 
   <Meettxt/>
   <Whychoose/> 
   <Footer/> 
   <Sidebarmob/>
   {/* <Sidebar/> */}
    </>
  )
}

export default App
