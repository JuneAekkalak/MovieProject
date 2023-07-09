import React from "react";
import "../style/style.css";
import { Link } from "react-router-dom";


function Contact() {

  const email = 'wanchiza007@yahoo.com'
  const phonenumber = '06x-xxxxxxx'
  const company = 'Rotten Eggplants PLC'
  const mapUrl ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63113.33512857402!2d99.89301194056938!3d8.635926604332012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3053a15345d177e1%3A0xe6fd3c1581866698!2sWEDA%20CAFE!5e0!3m2!1sth!2sth!4v1688874433997!5m2!1sth!2sth';

  return (
    <div className="bg-image">
      <p style={{fontSize:"50px"}} className="text-white">Contact</p>
      <p style={{fontSize:"20px"}} className="text-white">Email: {email}</p>
      <p style={{fontSize:"20px"}} className="text-white">Phone Number: {phonenumber}</p>
      <p style={{fontSize:"20px"}} className="text-white">Company: {company}</p>

      <iframe
        title="Google Map"
        src={mapUrl}
        width="1000"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
      
    </div>
    
  );
};

export default Contact;
