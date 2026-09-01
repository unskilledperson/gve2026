import React from 'react';
import './AcademicPartners.css';
import ugcLogo from '../assets/images/partners/UGC.jpg';
import upscLogo from '../assets/images/partners/upsc.jpg';
import debLogo from '../assets/images/partners/DEB.png';
import aiuLogo from '../assets/images/partners/aiu.webp';
import naacLogo from '../assets/images/partners/NAAC.png';
import aicteLogo from '../assets/images/partners/aicte.jpg';
import wesLogo from '../assets/images/partners/WES.svg';
import ecctisLogo from '../assets/images/partners/ecctis.svg';

const AcademicPartners = () => {
  const affiliations = [
    { 
      name: 'UGC', 
      fullName: 'University Grants Commission',
      logo: ugcLogo
    },
    { 
      name: 'UPSC', 
      fullName: 'Union Public Service Commission',
      logo: upscLogo
    },
    { 
      name: 'DEB', 
      fullName: 'Distance Education Bureau',
      logo: debLogo
    },
    { 
      name: 'AIU', 
      fullName: 'Association of Indian Universities',
      logo: aiuLogo
    },
    { 
      name: 'NAAC', 
      fullName: 'National Assessment and Accreditation Council',
      logo: naacLogo
    },
    { 
      name: 'AICTE', 
      fullName: 'All India Council for Technical Education',
      logo: aicteLogo
    },
    { 
      name: 'WES', 
      fullName: 'World Education Services',
      logo: wesLogo
    },
    { 
      name: 'UK NARIC', 
      fullName: 'UK NARIC (Ecctis)',
      logo: ecctisLogo
    }
  ];

  return (
    <section className="academic-partners">
      <div className="partners-container">
        <h2 className="partners-headline">University Affiliations</h2>
        <div className="partners-logos">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="affiliation-item">
              <div className="affiliation-logo-wrapper">
                <img 
                  src={affiliation.logo}
                  alt={affiliation.fullName}
                  className="affiliation-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="affiliation-text-fallback" 
                  style={{ display: 'none' }}
                >
                  {affiliation.name}
                </div>
              </div>
              <div className="affiliation-name">{affiliation.fullName}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPartners;

