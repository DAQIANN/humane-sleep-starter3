import React from 'react';
import Layout from '@theme/Layout';
import InformationsFeature from '@site/src/components/InformationsFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import HSPLogo from './hsp.png';
import styles from './index.module.css';

function InformationsHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBannerDarkBlue)}>
            <div className="container">
                <h1 className="hero__title">Information</h1>
            </div>
        </header>
    );
}

export default function Information() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Information : ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <InformationsHeader />
            <main>
                <InformationsFeature />
            </main>
        </Layout>
    );
}