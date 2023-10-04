import React from "react";
import "./styles/aboutus.css"
function Aboutus() {
  return (
    <div className="Aboutus">
      <header>
        <nav className="aboutus-navbar">
        </nav>
      </header>
      <section id="home">
        <div className="home-left">
          <img src="https://m.economictimes.com/thumb/msid-93814547,width-1200,height-900,resizemode-4,imgsize-141238/mohanlal-left.jpg" alt="Father and son" />
        </div>
        <div className="home-right">
          <h2 className="home-heading">Father and Son Buissness</h2>
          <p className="home-para">Father and Son owned and ran buisness, It has been our
          life dream together to run a buisness side by side. As lifelong California residents we've seen wildfires tear through
          communities and even threaten our home.  </p>
          {/* <a href="" className="btn">Our Mission</a> */}
        </div>
      </section>
      <section id="workFlow">
        <h2 className="heading">Our Game Plan</h2>
        <p className="para">We have hired a standout team of fire experts <br />
        Partnered with local contracting and landscaping buisness to deliver the best service
        <br /> and we are commited to serve you to the best of our ability </p>
        <div className="num-container">
          <div className="num-item"><span>Small buisness <br />Support</span></div>
          <div className="num-item"><span>Serving <br />North County San Diego</span></div>
          <div className="num-item"><span>Working With <br />The Community</span></div>
        </div>
      </section>
      <section id="goal">
        <div className="goal-left">
          <h2>Our Goal</h2>
          <p>Or Mission is to save homes, lives, and memories. Resident of California are at an ever present risk of wildfires, 
            threatening their homes and communities. We want to help protect these homes by creating an accesable outlet to fire harden your home. </p>
          <ul>
            <li>Complete home risk evaluation and comprehensive report</li>
            <li>Lower insurance rates through stopfire and calfire home certifications</li>
            <li>Provide landscaping and contracting fire saftey improvement services</li>
          </ul>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
        <div className="goal-right">
          <img src="https://www.staygreen.com/images/ServicesClearing.2110061547550.jpg" alt="brushclear" />
        </div>
      </section>
      <section id="our-Team">
        <h2>Our Members</h2>
        <div className="teamContainer">
          <div className="team-item">
            <img src="./teamMember.png" alt="" />
            <h5 className="member-name"></h5>
            <span className="role"></span>
          </div>
          <div className="team-item">
            <img src="./teamMember.png" alt="" />
            <h5 className="member-name">Mark Larson</h5>
            <span className="role">Co-Founder</span>
          </div>
          <div className="team-item">
            <img src="./teamMember.png" alt="" />
            <h5 className="member-name">Zane Larson</h5>
            <span className="role">Co-Founder</span>
          </div>
          <div className="team-item">
            <img src="./teamMember.png" alt="" />
            <h5 className="member-name"></h5>
            <span className="role"></span>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 - All rights reserved - stopfireusa.com</p>
      </footer>
      <script src="script.js"></script>
    </div>
  );
}

export default Aboutus;
