import React from "react";
import NSNavbar from "../../components/general-components/NSNavbar";
import NSFooter from "../../components/general-components/NSFooter";
import "./About.css";
import Jane from './homeimages/Jane.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSmile, faStar } from '@fortawesome/free-regular-svg-icons';

const About = () => {
  return (
    <>
      <NSNavbar />
      <div className="about-container grey-box">
            <div className="about-content">
          <h1 style={{ color: '#a08888'}}>About NS Travel Services</h1>
          <p className="aboutText">
            An innovative travel website designed to provide an easy travel planning experience for the user. <br /><br />
            This website is tailored to cater to the needs of travellers who seek convenience, recommendations 
            for their holidays and the ability to access useful travel resources all on one website.<br />

             <br></br>At its core, our travel website offers a range of features to users. Users can expect recommendations for city breaks, activities, attractions and restaurants.
             Our website will provide restaurant recommendations based on the chosen city of the user.
             The recommendations for activities and attractions include a map, enabling the user to easily see where each activity is in relation to each other. The resources page 
             includes links to useful resources. For example, there will be links to important information such as Booking.com and Skyscanner. As foreign currency is needed for travels,
             our website also includes a currency converter web app so users can easily access foreign exchange rates.  

          </p>
        </div>
        <div className="ceo-profile white-box">
          <div className="circle-image">
          <img src={Jane} alt="CEO" className="Jane" />
        </div>
        <div className="white-box">
            <h2 className="ceoname">Natalie Simmons</h2>
            <p className="CEO">
Meet Natalie Simmons, the visionary CEO behind NS Travel Services. Natalie's passion for travel led her to create a revolutionary platform, simplifying holiday planning. Frustrated with the overwhelming array of tools, she envisioned a centralised resource. Thus, NS Travel services emerged.
Natalie's brainchild consolidates travel resources—destinations, accommodations, activities, and budgeting—streamlining planning into one user-friendly interface. As NS Travel service's leader, Natalie continues to innovate, making travel planning stress-free. 
            </p>
          </div>
        </div>
        </div>
      <div className="values-container">
        <h3 className="ourvalues">Our Values</h3>
        <div className="values">
          <FontAwesomeIcon icon={faHeart} style={{ color: '#F8AD93', fontSize: '24px' }} />
          <p>
            Compassion<br></br>
            We are driven by a deep sense of compassion for our users, employees, and the communities we touch.<br></br> 
            Our commitment to understanding and addressing the needs of others is at the core of everything we do.
             </p>
        </div>
        <div className="values">
          <FontAwesomeIcon icon={faStar} style={{ color: '#F8AD93', fontSize: '24px' }} />
          <p>Star<br></br> 
          We strive for excellence in every endeavor, setting high standards for ourselves and our products/services. <br></br> Our commitment to continuous improvement and innovative thinking propels us to reach for the stars.
          </p>
        </div>
        <div className="values">
          <FontAwesomeIcon icon={faSmile} style={{ color: '#F8AD93', fontSize: '24px'}} />
          <p> Positivity<br></br> 
          We embrace a positive and joyful attitude in all aspects of our work.<br></br>  
          We believe that a positive mindset not only enhances the workplace environment but also inspires creativity and fosters strong, meaningful connections.
          </p>
        </div>
      </div>

      <NSFooter />
    </>
  );
};

export default About;



















