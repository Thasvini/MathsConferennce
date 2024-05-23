import React from 'react';
import './InsForAuthors.css';

const InsForAuthors = () => {
  return (
    <div className="instructions-container">
      <h1>Instruction for Authors</h1>
      <h2>Instructions for Paper Submission</h2>
      <table className='table'>
        <tbody>
          <tr>
            <td className="label">Number of Pages</td>
            <td className="value">Authors should submit standard single-column paper as the format given in the download with the minimum of 10 full pages, and maximum pages of 15 full pages, including figures, tables & references (Additional page charges apply)</td>
          </tr>
          <tr>
            <td className="label">Key Words</td>
            <td className="value">5-6 keywords</td>
          </tr>
          <tr>
            <td className="label">Font</td>
            <td className="value">12-point Times New Roman with 1.5 spacing</td>
          </tr>
          <tr>
            <td className="label">Page Size</td>
            <td className="value">U.S. Letter format (8.5” x 11”)</td>
          </tr>
          <tr>
            <td className="label">Margin</td>
            <td className="value">Normal (Top: 2.54 cm, Bottom: 2.54 cm; Left: 3.18 cm; Right: 3.18 cm)</td>
          </tr>
          <tr>
            <td className="label">Page Numbering</td>
            <td className="value">Off</td>
          </tr>
          <tr>
            <td className="label">File Format</td>
            <td className="value">4MB Maximum</td>
          </tr>
          <tr>
            <td className="label">Abstract</td>
            <td className="value">Abstract: abstract – 200 – 250, briefly specifying the aims of the work, the main results obtained, and the conclusions drawn (TNR 12pt).</td>
          </tr>
          <tr>
            <td className="label">Color</td>
            <td className="value">Use of color is encouraged, but since readers may print the paper in black and white, it is the author’s responsibility to ensure that all figures/plots can be understood when printed in black and white</td>
          </tr>
          <tr>
            <td colSpan="2" className="value">
              <ol >
                <li>To ensure correct formatting of your manuscript, please use the style file for U.S. Letter Size found at Refer Downloads.</li>
                <li>Violation of any of the above may result in rejection of manuscript.</li>
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InsForAuthors;
