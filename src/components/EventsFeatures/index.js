import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import HSPLogo from './hsp.png';

const EventsList = [
  {
    title: 'Blizzard of Blessings',
    Image: HSPLogo,
    description: (
      <>
        The Blizzard of Blessings drive, organized by the Humane Sleep Project in collaboration with Movement Lab Chiropractic, runs from November 1st to December 22nd. This initiative aims to collect warm clothing, blankets, and sleeping bags for the homeless in the Bay Area to provide essential comfort and warmth during the harsh winter months. The drive seeks community support to spread the word and contribute to this cause. For more details or to get involved, please contact us at HumaneSleepProject@gmail.com or visit our website at Humane Sleep Project.
      </>
    ),
  },
  {
    title: 'Sewa Diwali Collaboration',
    Image: HSPLogo,
    description: (
      <>
        In collaboration with Sewa Diwali and KKNC, the Humane Sleep Project launched a winter outreach initiative in San Jose and Oakland to support homeless individuals with essential clothing and sleeping supplies. This effort comes in response to the severe winter conditions faced by the unsheltered population in these cities. With support from Trader Joe's and other donors, nearly 100 winter warmth kits were distributed, highlighting the urgent need for such resources. The project not only provides immediate relief but also aims to build connections and advocate for sustainable solutions to homelessness.
      </>
    ),
  },
  // Add more events here as needed
];

function Events({ Image, title, description }) {
  return (
    <div className={clsx('col col--12')}>
      <div className={clsx('row', styles.eventRow)}>
        <div className={clsx('col col--6', styles.imageColumn)}>
          <img src={Image} className={styles.featureImg} alt={title} />
        </div>
        <div className={clsx('col col--6', styles.textColumn)}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function EventsFeature() {
  return (
    <section className={styles.eventsSection}>
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
