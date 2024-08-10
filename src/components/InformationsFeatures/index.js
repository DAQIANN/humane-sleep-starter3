import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import HSPLogo from './hsp.png';
import CroppedMapOfBay from './CroppedMapOfBay.png';

const InformationsList = [
  {
    title: 'Bay Area Map',
    Image: CroppedMapOfBay,
    description: (
      <>
      </>
    ),
    buttonText: 'To Dynamic Map',
    buttonLink: 'https://www.gmapgis.com/viewer.html?fcode=rhR1tfOKQnZ', // Add the link you want to open
  },
];

function Informations({ Image, title, description, buttonText, buttonLink }) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img src={Image} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {buttonLink && (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default function InformationsFeature() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {InformationsList.map((props, idx) => (
            <Informations key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
