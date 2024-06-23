import React from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import Sidebarmob from '../../layouts/Sidebarmob/Sidebarmob'
import NavbarPro from '../../layouts/NavbarPro/NavbarPro'
import Likecom from '../../components/like/like'

export default function Like() {
  return (
    <>
     <NavbarPro/>
     <Sidebar/>
     <Sidebarmob/>
     <Likecom/> 
    </>
  )
}
