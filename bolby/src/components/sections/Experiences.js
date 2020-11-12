import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "University of British Columbia (Bachelor's Degree)",
    years: "2015 - 2020",
    content:
      "Graduated with honors receiving a degree in Business and Computer Science",
  },
  // {
  //   id: 2,
  //   title: "Bachelor’s Degree",
  //   years: "2017 - 2013",
  //   content:
  //     "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  // },
  // {
  //   id: 3,
  //   title: "Honours Degree",
  //   years: "2013 - 2009",
  //   content:
  //     "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  // },
];

const experienceData = [
  {
    id: 1,
    title: "SAP Canada Inc. (Cloud Analytics Agile Developer Intern)",
    years: "2018 - 2019",
    content:
      "Fully owned development and testing of customer requested client-side features for SAP's largest product",
  },
  {
    id: 2,
    title: "Manner Studios (Front-End Developer)",
    years: "2019 - 2019",
    content:
      "Built a website based on a UX design for furniture and spaces",
  },
  // {
  //   id: 3,
  //   title: "Back-End Developer",
  //   years: "2013 - 2009",
  //   content:
  //     "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  // },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
