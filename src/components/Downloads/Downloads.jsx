import React from 'react'
import './Downloads.css'
import download from './download.png'

const Downloads = () => {
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
    <div className="download">
        <div className="downloaditems">
            <h3 style={{margin:'400px'}}>Download Poster<img src={download} alt="" /></h3>
            <h3>Download Certificates<img src={download} alt="" /></h3>
        </div>
    </div>
  )
}

export default Downloads