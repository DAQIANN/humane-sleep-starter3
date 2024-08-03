import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import HSPLogo from './hsp.png';
import AbhiPic from './AbhiPic.jpeg';
import AdiSquarePic from './AdiSquarePic.png';
import DanielPic from './DanielPic.jpg';
import MehakPic from './MehakPic.jpeg';
import SidProf from './SidProf.png';

const PeoplesList = [
  {
    title: 'Mission Statement',
    Image: HSPLogo,
    description: (
      <>
        Humane Sleep Project is dedicated to providing assistance to individuals facing homelessness by ensuring access to essential sleep provisions. Recognizing sleep as a fundamental human necessity, we strongly believe that every person deserves the opportunity to enjoy a restful and comfortable night's sleep.
      </>
    ),
  },
];

const AboutUsList = [
  {
    title: 'Sidharth Sreedar - Executive Director',
    Image: SidProf,
    description: (
      <>
        Created this organization envisioning a future of providing sleeping measures for people of unprivileged communities.
      </>
    ),
  },
  {
    title: 'Aditi Sharma - COO and Secretary',
    Image: AdiSquarePic,
    description: (
      <>
        Cofounded Humane Sleep Project with a belief that every individual, regardless of their financial situation, should have access to essential sleeping supplies.
      </>
    ),
  },
  {
    title: 'Abhi Vishwas - Director of Finance',
    Image: AbhiPic,
    description: (
      <>
        This aligns with my mission to make meaningful impacts by improving the well-being of both our community and the homeless.
      </>
    ),
  },
  {
    title: 'Mehak Sharma - Social Media Director',
    Image: MehakPic,
    description: (
      <>
        My background in organizing drives for women in need as well as my work in mental health have strengthened my dedication to supporting vulnerable communities and promoting well-being.
      </>
    ),
  },
  {
    title: 'Daniel Qian - Director of Engineering',
    Image: DanielPic,
    description: (
      <>
        Passionate about attempting to alleviate the hardships of those less fortunate in the Bay Area.
      </>
    ),
  },
];


function Peoples({Image, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img src={Image} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function AboutUs({ Image, title, description }) {
  return (
    <div className={clsx('col col--6', styles.col)}>
      <div className="text--center">
        <img src={Image} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function AboutUsFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PeoplesList.map((props, idx) => (
            <Peoples key={idx} {...props} />
          ))}
          {AboutUsList.map((props, idx) => (
            <AboutUs key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
