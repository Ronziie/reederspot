import React from 'react'
import artist from '../src/img/artist.jpg'
import check from '../src/img/check.png'
import { FaEllipsisH , FaHeadphones, FaCheck} from 'react-icons/fa'

export default function Banner() {
  return (
    <div className="banner">
      <img src={artist} alt="" className="banner-Img"></img>

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-ha</h2>
              <img src={check} alt=""></img>
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              11,134,342 <span>Monthly Listeners</span>
            </p>
          </div>

          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-layer"></div>
    </div> 
  )
}