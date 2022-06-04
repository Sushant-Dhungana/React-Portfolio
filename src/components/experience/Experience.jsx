import React, { useEffect } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import "./Experience.css";

import Aos from "aos";
import "aos/dist/aos.css";
function Experience() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="about">
      <div className="container experience__container">
        <div data-aos='fade-up' className="experience__webdesign">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icon" />
              <div>
                <h4>HTML,CSS and Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icon" />
              <div>
                <h4>Javascript and ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icon" />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div data-aos="fade-right" className="experience__webdevelopment">
          <h3>Qualification</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MenuBookIcon className="experience__details-icon" />
              <div>
                <h4>Baseline Academy School</h4>
                <small className="text-light">Kudahar, Pokhara</small>
              </div>
            </article>
            <article className="experience__details">
              <SchoolIcon className="experience__details-icon" />
              <div>
                <h4>Capital College and Research Center(CCRC)</h4>
                <small className="text-light">Balkumari, Kathmandu</small>
              </div>
            </article>
            <article className="experience__details">
              <SchoolIcon className="experience__details-icon" />
              <div>
                <h4>Gandaki College Of Engineering And Science</h4>
                <small className="text-light">Lamachaur, Pokhara</small>
              </div>
            </article>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Experience;
