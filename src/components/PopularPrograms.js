import React from 'react';
import { Link } from 'react-router-dom';
import './PopularPrograms.css';
import accountingImg from '../assets/images/programs/b_com.png';
import artsImg from '../assets/images/programs/b_ed.png';
import bbaImg from '../assets/images/programs/bba.png';
import bscImg from '../assets/images/programs/bs_c.png';
import engImg from '../assets/images/programs/eng.png';
import mbaImg from '../assets/images/programs/mba.png';

const PopularPrograms = () => {
  const programs = [
    {
      image: accountingImg,
      name: 'B.Com',
      path: '/courses/bcom'
    },
    {
      image: bbaImg,
      name: 'BBA',
      path: '/courses/bba'
    },
    {
      image: bscImg,
      name: 'B.Sc',
      path: '/courses/bsc'
    },
    {
      image: artsImg,
      name: 'B.Ed',
      path: '/courses/bed'
    },
    {
      image: engImg,
      name: 'M.Com',
      path: '/courses/mcom'
    },
    {
      image: mbaImg,
      name: 'MBA',
      path: '/courses/mba'
    },
  ];

  return (
    <section className="popular-programs">
      <h2 className="programs-heading">Popular Programs</h2>
      <div className="programs-container">
        <div className="programs-grid">
          {programs.map((program, index) => (
            <Link key={index} to={program.path} className="program-image-wrapper">
              {program.image ? (
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="program-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="program-image-placeholder">
                  <span>{program.name}</span>
                </div>
              )}
              <div className="program-name">
                <span className="program-name-text">{program.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPrograms;

