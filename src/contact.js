import React from 'react';
import "./styles/contact.css"

function ContactForm() {
  return (
    <div className="new_home_web">
      <div className="responsive-container-block big-container">
        <img className="imgBG" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw65.png" alt="Background Image" />
        <div className="responsive-container-block textContainer">
          <div className="topHead">
            <p className="text-blk heading">
              Contact
              <span className="orangeText">
                Us
              </span>
            </p>
            <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id"></div>
          </div>
          <p className="text-blk subHeading">
            North County fire inspection and prevention agency. Our team is focused on communication and helping our customers. Email or call today.
          </p>
          <h3 class="pnumber">Call</h3>
          <h3 class="pnumber">(760) 638 9640</h3> 
          <h4 class="pnumber">OR</h4>
          <h3 class="pnumber">(760) 638 0368</h3>
        </div>
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <div className="responsive-container-block">
                  <div className="left4">
                    <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-2">
                      <input className="input" id="ijowk-2" name="Name" placeholder="Name" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input className="input" id="indfi-2" name="Address" placeholder="Address" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input className="input" id="ipmgh-2" name="Email" placeholder="Email Address" />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                      <input className="input" id="imgis-2" name="PhoneNumber" placeholder="Phone Number" />
                    </div>
                  </div>
                  
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-2">
                    <textarea className="textinput" id="i5vyy-2" placeholder="Message"></textarea>
                  </div>
                </div>
                <a className="send" href="#" id="w-c-s-bgc_p-1-dm-id">
                  Send
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
