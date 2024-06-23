import React from 'react'

import Navbar from '../../layouts/Navbar/Navbar';
import Hero from '../../components/hero/hero';
import Meettxt from '../../components/meettxt/meettxt';
import Whychoose from '../../components/whychoose/whychoose';
import Footer from '../../layouts/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Meettxt/>
      <Whychoose/>
      <Footer/>
    </>
  )
}
