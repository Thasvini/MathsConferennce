import React from 'react';
import './RegistrationFees.css';

const RegistrationFees = () => {
  return (
    <>
      <div className="hero2">
        <div className="hero-text2">
          <h1>ICMST-2025</h1>
          <p>February 06, 07, 2025</p>
          <h2>GATHER INFORMATION ABOUT REGISTRATION FEES HERE</h2>
        </div>
      </div>
      <div className="instructions-container3">
        <h1>Registration Fees</h1>
        <h2>Indian Authors</h2>
        <div className="table-container">
          <table className='table'>
            <tbody>
              <tr>
                <td className="label">Indian Authors</td>
                <td className="value">Early</td>
                <td className="value">Normal</td>
              </tr>
              <tr>
                <td className="label">UG & PG Candidates</td>
                <td className="value">12000 INR</td>
                <td className="value">13000 INR</td>
              </tr>
              <tr>
                <td className="label">Faculty & Research Scholars</td>
                <td className="value">12000 INR</td>
                <td className="value">13000 INR</td>
              </tr>
              <tr>
                <td className="label">Delegates from Research Laboratory</td>
                <td className="value">12000 INR</td>
                <td className="value">13000 INR</td>
              </tr>
              <tr>
                <td className="label">Delegates from Industry</td>
                <td className="value">13000 INR</td>
                <td className="value">14000 INR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Foreign Authors</h2>
        <div className="table-container">
          <table className='table'>
            <tbody>
              <tr>
                <td className="label">Foreign Authors</td>
                <td className="value">Early</td>
                <td className="value">Normal</td>
              </tr>
              <tr>
                <td className="label">UG & PG Candidates</td>
                <td className="value">USD 200</td>
                <td className="value">USD 225</td>
              </tr>
              <tr>
                <td className="label">Ph.D Scholar</td>
                <td className="value">USD 200</td>
                <td className="value">USD 225</td>
              </tr>
              <tr>
                <td className="label">Industrial Scholar</td>
                <td className="value">USD 225</td>
                <td className="value">USD 250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Conference registration fees Payment can only be done through NEFT/ Net Banking/ Bank Deposit as the details are given below:</p>
        <div className="table-container">
          <table className='table'>
            <tbody>
              <tr>
                <td className="label" colSpan={2}>Direct Payment (Bank Deposit/Net Banking/NEFT) through</td>
              </tr>
              <tr>
                <td className="label">Name</td>
                <td className="value" style={{color:'#212ea0'}}>Sri Eshwar College of Engineering</td>
              </tr>
              <tr>
                <td className="label">Account No</td>
                <td className="value">510341000001561</td>
              </tr>
              <tr>
                <td className="label">Branch</td>
                <td className="value">Union Bank of India</td>
              </tr>
              <tr>
                <td className="label">City</td>
                <td className="value">Coimbatore</td>
              </tr>
              <tr>
                <td className="label">Account Type</td>
                <td className="value">Current Account</td>
              </tr>
              <tr>
                <td className="label">IFSC Code</td>
                <td className="value">UBIN0901130</td>
              </tr>
              <tr>
                <td className="label">SWIFT Code</td>
                <td className="value">UBININBBC01</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="additional-content">
          <h2>Registration Policy</h2>
          <ul>
            <li>Accommodation not available, Fees includes lunch and refreshment for both the days.</li>
            <li>Registration fees cover Conference kit, Proceedings (DVD Format), Certificate</li>
            <li>Authors can present their paper through virtual / Video conferencing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RegistrationFees;
