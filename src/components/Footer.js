import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer bg-grey">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright&copy;{new Date().getFullYear()}
         <span> Neil Oribello</span> All right reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
