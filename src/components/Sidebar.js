import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import github from '../assets/icons/github.svg';
import tie from '../assets/icons/tie.svg';
import pin from '../assets/icons/pin.svg';
import mightycoder from '../assets/mightycoder.svg';
import resume from '../assets/resume.pdf';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open('mailto:purya.B97@gmail.com');
  };

  const sidebar_variant = {
    hidden: {
      x: '-20vw'
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: 'spring'
      }
    }
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">Purya Behdarvandan</div>
      <div className="sidebar__item sidebar__title">Frontend Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a
          href="https://www.facebook.com/purya.behdarvandan.3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" className="sidebar__icon mr-3" />
        </a>
        <a
          href="https://twitter.com/Sophrosyne97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a
            href="https://github.com/PuryaB97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className="sidebar__icon mr-2" />
            Github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon  mr-1" />
          Ankara, Turkey
        </div>
        <div className="sidebar__item">purya.B97@gmail.com</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
