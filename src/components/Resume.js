import React from 'react';
import Bar from './Bar';
import { motion } from 'framer-motion';
import { tools, languages } from './data/resume_data';

const Resume = () => {
  const resume_variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duratiion: 0.6
      }
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      className="container resume"
      variants={resume_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              I'm preparing for computer science
            </h5>
            <p className="resume-card__name">Ontario Tech University</p>
            <p className="resume-card__detail">
              I finished high school, I keep improving myself and prepare for
              university
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Freelancer</h5>
            <p className="resume-card__name">Present</p>
            <p className="resume-card__detail">
              I work as a per time freelancer in fiverr and also complate some
              projects in local
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h5 className="resume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((Language) => (
              <Bar value={Language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
