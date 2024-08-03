import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import HSPLogo from './hsp.png';

const EventsList = [
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

function Events({Image, title, description}) {
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

export default function EventsFeature() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {EventsList.map((props, idx) => (
            <Events key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
