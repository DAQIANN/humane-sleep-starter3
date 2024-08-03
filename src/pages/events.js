import React from 'react';
import Layout from '@theme/Layout';
import EventsFeature from '@site/src/components/EventsFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import HSPLogo from './hsp.png';
import styles from './index.module.css';

function EventsHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBannerDarkBlue)}>
            <div className="container">
                <h1 className="hero__title">Events</h1>
            </div>
        </header>
    );
}

export default function Events() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Events : ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <EventsHeader />
            <main>
                <EventsFeature />
            </main>
        </Layout>
    );
}