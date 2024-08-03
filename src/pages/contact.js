import React from 'react';
import Layout from '@theme/Layout';
import ContactFeature from '../components/ContactFeature';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import HSPLogo from './hsp.png';
import styles from './index.module.css';

function ContactHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBannerDarkBlue)}>
            <div className="container">
                <h1 className="hero__title">Contact Us</h1>
            </div>
        </header>
    );
}

export default function Contact() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Contact Us : ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <ContactHeader />
            <main className={styles.mainContent}>
                <ContactFeature />
            </main>
        </Layout>
    );
}
