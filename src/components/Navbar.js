import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

function Navbar({ toggleSidebar }) {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  })
    
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'} >
      <div className="nav-center">
        <div className="nav-header">
          <a href="/"><span className="nav-logo">n.o</span></a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar