import React from 'react'
import Profilecom from '../../components/profile/profile'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import NavbarPro from '../../layouts/NavbarPro/NavbarPro'
import Sidebarmob from '../../layouts/Sidebarmob/Sidebarmob'

export default function Profile() {
  return (
    <>
      <NavbarPro/>
      <Sidebar/>
      <Sidebarmob/>
      <Profilecom/>
    </>
  )
}
