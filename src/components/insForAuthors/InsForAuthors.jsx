import React from "react";
import "./InsForAuthors.css";

const InsForAuthors = () => {
  return (
    <>
      <div className="hero1">
        <div className="hero-text1">
          <h1>ICMST-2025</h1>
          <p>February 06 & 07 - 2025</p>
          <h2>
            1<sup>st</sup> INTERNATIONAL CONFERENCE ON MATHEMATICS IN SCIENCE
            AND TECHNOLOGY
          </h2>
          <h2>SCROLL DOWN FOR MORE</h2>
        </div>
      </div>
      <div className="instructions-container1">
        <h1>Instruction For Authors</h1>
        <h2>Instruction For Paper Submission</h2>
        <div className="table-container">
          <table className="table">
            <tbody>
              <tr>
                <td className="label">Number of Pages</td>
                <td className="value">
                  Authors should submit a standard single-column paper as per
                  the format given in the download with a minimum of 10 full
                  pages and a maximum of 15 full pages, including figures,
                  tables, and references. Additional page charges apply for
                  extra pages.
                </td>
              </tr>
              <tr>
                <td className="label">Key Words</td>
                <td className="value">5-6 keywords</td>
              </tr>
              <tr>
                <td className="label">Font</td>
                <td className="value">
                  12-point Times New Roman with 1.5 spacing
                </td>
              </tr>
              <tr>
                <td className="label">Page Size</td>
                <td className="value">U.S. Letter format (8.5” x 11”)</td>
              </tr>
              <tr>
                <td className="label">Margin</td>
                <td className="value">
                  Normal (Top: 2.54 cm, Bottom: 2.54 cm; Left: 3.18 cm; Right:
                  3.18 cm)
                </td>
              </tr>
              <tr>
                <td className="label">Page Numbering</td>
                <td className="value">Off</td>
              </tr>
              <tr>
                <td className="label">File Format</td>
                <td className="value">PDF, 4MB maximum</td>
              </tr>
              <tr>
                <td className="label">Abstract</td>
                <td className="value">
                  200-250 words, briefly specifying the aims of the work, the
                  main results obtained, and the conclusions drawn. Use 12-point
                  Times New Roman font.
                </td>
              </tr>
              <tr>
                <td className="label">Color</td>
                <td className="value">
                  Use of color is encouraged, but ensure that all figures and
                  plots are understandable when printed in black and white.
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="value">
                  <ol>
                    <li>
                      To ensure correct formatting of your manuscript, please
                      use the style file for U.S. Letter Size found at the
                      downloads section.
                    </li>
                    <li>
                      Violation of any of the above guidelines may result in
                      rejection of the manuscript.
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="additional-content">
          <h2>Presentation and Official Language</h2>
          <ul>
            <li>Conference will be hosted in hybrid mode.</li>
            <li>
              If a paper, included into the proceedings, fails to be presented
              any way at the conference, all authors of the paper will be barred
              from paper submission to conferences of the organizers in the
              future.
            </li>
            <li>The official language of the Conference is English.</li>
            <li>
              All the camera-ready manuscripts should be submitted in English,
              and presentations should be made in English.
            </li>
            <li>
              Presentations should be made in English. Authors are instructed to
              have their presentation content in a USB drive.
            </li>
            <li>Conference room is supplied with a data projector with PC.</li>
            <li>Usage of individual laptops is restricted.</li>
          </ul>
          <h2>Publications</h2>
          <ul>
            <li>One best paper will be awarded in each Theme.</li>
            <li>
              The high quality selected papers will be published in Scopus
              Indexed Journals with additional cost.
            </li>
            <li>
              The list of identified Scopus journals will be announced on the
              website shortly.
            </li>
            <li>
              The other accepted papers will be published in the Non-Scopus
              journal and conference proceeding with an ISSN that will be
              distributed at the registration desk.
            </li>
            <li>All the presenters will be provided with certificates.</li>
          </ul>
          <h2>Peer Review Process</h2>
          <ul>
            <li>
              The ICMST-2025 has a double-blind peer-review process. In
              double-anonymous, neither the author nor the reviewers are aware
              of each other’s identity.
            </li>
            <li>
              Any paper submitted for the conference is reviewed by a minimum of
              two reviewers with expertise in the relevant subject area. The
              peer review process is evaluated on the basis of scope, relevance,
              originality, technical soundness, language, quality, novelty, etc.
            </li>
            <li>
              Reviewers are appointed from different institutes (national and
              international level) and diverse regions, with expertise and
              experience in particular fields.
            </li>
            <li>
              Conference peer review occurs within a fixed window of time. All
              authors are notified of the peer review decision on their paper at
              the same time. Based on the reviewers’ comments, papers are
              accepted, rejected, or accepted with revision.
            </li>
            <li>
              The number of submissions determines the number of reviewers
              required. The plagiarism checking committee initially checks the
              plagiarism in the submitted paper using plagiarism checking tools.
            </li>
          </ul>
          <h2>Plagiarism Policy</h2>
          <ul>
            <li>
              Plagiarism report of more than 10% will be rejected without
              further notification. The plagiarism will be checked any time
              during the review process.
            </li>
            <li>
              Authors are insisted to submit their original work without
              plagiarism. If plagiarism is found, authors will be responsible
              for any consequences. Authors are responsible for the rejection of
              the manuscript based on the plagiarism report.
            </li>
          </ul>
          <h2>Paper Submission</h2>
          <ul>
            <li>
              Authors are instructed to submit their manuscript and Turnitin
              Similarity report by clicking the link below. The Turnitin
              plagiarism score of 10% and below would be accepted.{" "}
              <a href="submission-link" style={{ color: "#212ea0" }}>
                Click here to Submit Your Paper
              </a>
            </li>
          </ul>
          <h2>Copyright Form</h2>
          <ul>
            <li>
              Transferring copyright is a necessary requirement for publication,
              except for material in the public domain or which is reprinted
              with permission from a previously published, copyrighted
              publication.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InsForAuthors;
