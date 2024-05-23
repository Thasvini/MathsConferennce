import React from "react";
import "./Speakers.css";
import speaker1 from "../../assets/speaker1.png";
import speaker2 from "../../assets/speaker2.png";
import speaker3 from "../../assets/speaker3.png";
const Speakers = () => {
  return (
    <div className="speaker-container">
      <div className="profile-card">
        <div className="row">
          <div className="col col-img">
            <img src={speaker1} alt="Profile" className="profile-img" />
          </div>
          <div className="col">
            <div className="name">Prof. Dr. Dumitru Baleanu</div>
            <div className="designation">
              Department of Computer Science and Mathematics, Lebanese American
              University, Beirut, Lebanon,
            </div>
          </div>
        </div>
        <div className="row description">
          <div className="col">
            Dumitru Baleanu is a Professor at the Department of Computer Science
            and Mathematics, Lebanese American University, Beirut, Lebanon.
            Dumitru Baleanu got his PhD from the Institute of Atomic Physics in
            1996. His fields of interest include the fractional dynamics and its
            applications, fractional differential equations and their
            applications, discrete mathematics, image processing,
            bio-informatics, mathematical biology, mathematical physics, soliton
            theory, Lie symmetry, dynamic systems on time scales, computational
            complexity, the wavelet method and its applications, quantization of
            systems with constraints, the Hamilton-Jacobi formalism, geometries
            admitting generic and non-generic symmetries. Dumitru is a pioneer
            of the fractional variational principles and their applications in
            control theory. He is one of the co-authors of the seminal paper
            entitled “Anomalous diffusion expressed through fractional order
            differential operators in the Bloch-Torrey equation”, published in
            Journal of Magnetic Resonance (2008),which plays now a fundamental
            role within diffusion weighted MRI. Dumitru had an important role in
            developing the non-singular operators with Mittag-Leffler kernels
            and their applications in real world phenomena. Dumitru Baleanu is
            co-author of more than 20 books published by Springer, Elsevier and
            World Scientific. His H index is 100.
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="row">
          <div className="col col-img">
            <img src={speaker2} alt="Profile" className="profile-img" />
          </div>
          <div className="col">
            <div className="name">Dr. R. Sakthivel</div>
            <div className="designation">
              Professor, Department of Applied Mathematics, Bharathiar
              University, Coimbatore, Tamil Nadu, India
            </div>
          </div>
        </div>
        <div className="row description">
          <div className="col">
            Rathinasamy Sakthivel received the B.Sc., M.Sc., M.Phil., and Ph.D.
            degrees in mathematics from Bharathiar University, Coimbatore,
            India, in 1992, 1994, 1996, and 1999, respectively. He served as a
            Lecturer with the Department of Mathematics, Sri Krishna College of
            Engineering and Technology, Coimbatore, from 2000 to 2001. From 2001
            to 2003, he was a Postdoctoral Fellow with the Department of
            Mathematics, Inha University, Incheon, South Korea. From 2003 to
            2005, he was a Japan Society for the Promotion of Science Fellow
            with the Department of Systems Innovation and Informatics, Kyushu
            Institute of Technology, Kitakyushu, Japan. He was a Research
            Professor with the Department of Mathematics, Yonsei University,
            Seoul, South Korea, till 2006. He was a Postdoctoral Fellow (Brain
            Pool Program) with the Department of Mechanical Engineering, Pohang
            University of Science and Technology, Pohang, South Korea, from 2006
            to 2008. He served as an Assistant and Associate Professor with the
            Department of Mathematics, Sungkyunkwan University, Suwon, South
            Korea, from 2008 to 2013. From 2013 to 2016, he was a Professor with
            the Department of Mathematics, Sri Ramakrishna Institute of
            Technology, Coimbatore. He is currently a Professor with the
            Department of Applied Mathematics, Bharathiar University. He jointly
            with his Foreign Research Collaborators, published three books and a
            good number of book chapters in Springer. He has been to Japan,
            Malaysia, Brazil, Germany, South Korea, Australia, China, and Saudi
            Arabia, as a Visiting Researcher. His research interests include
            systems and control theory, optimization techniques, and nonlinear
            dynamics. He has published over 450 research papers in reputed SCIE
            journals in the above areas.,Prof. Sakthivel has received the most
            coveted “Highly Cited Researcher” Award in 2017–2020 from the
            Clarivate Analytics, USA. He has been on the editorial board of
            international journals, including IEEE Access, The Journal of the
            Franklin Institute, Neurocomputing, Neural Processing Letters,
            Mathematics, International Journal of Applied Mathematics and
            Computer Science, and the Journal of Electrical Engineering and
            Technology.
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="row">
          <div className="col col-img">
            <img src={speaker3} alt="Profile" className="profile-img" />
          </div>
          <div className="col">
            <div className="name">Dr. R. Vadivel</div>
            <div className="designation">
              Faculty of Science of Technology, Thailand
            </div>
          </div>
        </div>
        <div className="row description">
          <div className="col">
            Vadivel Rajarathinam received his B.Sc., M.Sc., and M.Phil in
            Mathematics from the Department of Mathematics, Sri Ramakrishna
            Mission Vidyalaya College of Arts and Science affiliated to
            Bharathiar University, Tamil Nadu, India in 2007, 2010, and 2012,
            respectively, and the Ph.D. degree from the Department of
            Mathematics, Thiruvalluvar University, Tamilnadu, India, in 2018. He
            was a Post-Doctoral Research Fellow in the Research Center for Wind
            Energy Systems, Kunsan National University, Gunsan, South Korea,
            from 2018 to 2019. He has authored and coauthored more than 60
            articles in various SCI journals. Currently, he is working as a
            lecturer in Department of Mathematics, Faculty of Science and
            Technology, Phuket Rajabhat University, Thailand.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
