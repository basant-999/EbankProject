import React from 'react'
import "../css/footer.css"
import { IoLogoTwitter } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { SiNike } from "react-icons/si";

const Footer = () => {
  return (
   <>
   <div className='footersection'>
        <div className="footersection_first">
            <h6>follow here</h6>
            <p><span>1.</span>Facebook  </p>
            <p><span>2.</span>Twitter <IoLogoTwitter /> </p>
            <p><span>3.</span>instagram   </p>
            <p><span>4.</span>Whatsapp.</p>
        </div>
        {/*  */}
        <div className="footersection_first">
            <h6>Connect us</h6>
            <p><span>1.</span>SBI  </p>
            <p><span>2.</span>BOI  </p>
            <p><span>3.</span>HDFC  </p>
            <p><span>4.</span>DCB</p>
        </div>
        {/*  */}
        <div className="footer_main">
            <div className="footer_first">
                <p>Upi</p>
                <p>Cash</p>
                <p>Online <SiNike /></p>
            </div>
            <div className="footer_second">
                <p> <CiBank />copy Right by RBI</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default Footer