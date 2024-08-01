import React from 'react';
import Layout from '@theme/Layout';
import AboutUsFeatures from '@site/src/components/AboutUsFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import HSPLogo from './hsp.png';
import styles from './index.module.css';

function AboutUsHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">About Us</h1>
            </div>
        </header>
    );
}

export default function AboutUs() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`About ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <AboutUsHeader />
            <main>
                <AboutUsFeatures />
            </main>
        </Layout>
    );
}