import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Brendon",
  avatarImage: "/images/profile-picture.png",
  content:
    "My name is Brendon Chiang. I recently graduated in 2020 straight into a global pandemic so I've been spending a lot of my free time learning React on Udemy. This is the fruition of my journey.",
};

const progressData = [
  {
    id: 1,
    title: "Front-End Development",
    percantage: 90,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Back-End Development",
    percantage: 70,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "A joy to have on the team",
    percantage: 100,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "LeetCode questions completed",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Meaningful connections made",
    count: 1029,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Hackathons completed",
    count: 4,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="https://drive.google.com/file/d/1_b1syY6TLe_Rk54u6frFQ1UMgwOJdXqu/view?usp=sharing" className="btn btn-default">
                      Download Resume/CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
