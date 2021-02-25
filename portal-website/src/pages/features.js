import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '99% up time',
    imageUrl: 'svg/uptime.svg',
    description: (
      <>
        24/7 online, so you never miss a thing.
      </>
    ),
  },
  {
    title: 'Auto cleanup',
    imageUrl: 'svg/clean.svg',
    description: (
      <>
        Portal respects your server and removes all
        unnecessary messages to reduce clutter.
      </>
    ),
  },
  {
    title: 'Fast',
    imageUrl: 'svg/fast_time.svg',
    description: (
      <>
        Coded with attention to be fast, robust and reliable.
        Hosted online so it never missed a click.
      </>
    ),
  },
  {
    title: 'Customisable',
    imageUrl: 'svg/customisable.svg',
    description: (
      <>
        Every server is different, so Portal is unique
        for every one of them.
      </>
    ),
  },
  {
    title: 'Anti Spam',
    imageUrl: 'svg/spam.svg',
    description: (
      <>
        Portal will warn members if they are spamming.
        Commands that are prown to spamming have cooldowns
        so that spamming is avoided.
      </>
    ),
  },
  {
    title: 'Music Quality',
    imageUrl: 'svg/music.svg',
    description: (
      <>
        Portal is streaming the best quality music there is.
        Make use of it in your music channl.
      </>
    ),
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  return (
    <Layout
      title="Features"
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Features</h1>
          <p className="hero__subtitle">
            You can think of features as the aftermath
            of a command or the passives of Portal
          </p>
        </div>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h2 className="hero__title">
            There are so many things to love
          </h2>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
