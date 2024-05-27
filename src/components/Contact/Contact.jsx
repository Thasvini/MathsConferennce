import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "09afbb51-da5f-4fe9-9b09-7116aecc912e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};  


  return (
    <div className="contact">
        <div className="contact-col">
          <h3>Contact Us On</h3>
            <ul>
                <li><img src={mail_icon} alt="" />icmst@sece.ac.in</li>
                <li><img src={phone_icon} alt="" />+91 63811 38369, +91 99766 33443.</li>
                <li><img src={location_icon} alt="" />Sri Eshwar College of Engineering<br />Coimbatore, Tamil Nadu</li>
            </ul>
        </div>
    </div>
  )
}

export default Contact