import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import HSPLogo from './hsp.png';

const PeoplesList = [
  {
    title: 'Mission Statement',
    Image: HSPLogo,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
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

export default function AboutUsFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PeoplesList.map((props, idx) => (
            <Peoples key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
