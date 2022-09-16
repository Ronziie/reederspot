import React from 'react'
import "../src/styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../src/img/profile.jpg";


export default function RightMenu() {
  return (
    <div className="rightContainer">
      <div className="goPro">
          <i>
            <FaCrown />
            <p>
              <span> Go</span>Pro
            </p>
          </i>

          <i>
            <FaBell />
          </i>

          <i>
            <FaRegHeart />
          </i>
      </div>
      <div className="profile">
          <i>
            <FaSun />
          </i>
          <i>
            <FaCogs />
          </i>

          <div className="profileImage">
            <img src={Profile} alt="" />
          </div>
      </div>
  </div>
  )
}
