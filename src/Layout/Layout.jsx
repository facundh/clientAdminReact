import React from 'react';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
        Layout
        <p>Antes del oultet</p>
        <Outlet />

    </div>

  )
}

export default Layout