import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" style={{ width: "200px", height: "auto" }}/>
          </div>
          <div style={{ marginLeft: "200px" }}>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          
          <div style={{ marginLeft: "200px" }}>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>077-111-1111</span>
            </div>
            <div>
              <MdEmail />
              <span>vannihealth@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Vavuniya, Sri Lanka</span>
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <center><b>&copy; 2024 Vanni Healthcare. All Rights Reserved</b></center>
        </div>
      </footer>
    </>
  );
};

export default Footer;
