import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
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
        Coded with attention to speed, robust and reliable.
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
        Portal does not kick or ban, it mutes and silences users
        that are not respecting the server. [under maintenance]
      </>
    ),
  },
  {
    title: 'Music Quality',
    imageUrl: 'svg/music.svg',
    description: (
      <>
        The easiest way to add music to your server. there
        your are only one channel and one name away of your songs !
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
  return (
    <Layout
      title="Features"
      description="Features">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Features</h1>
          <p className="hero__subtitle">
            You can think of features as the aftermath
            of a command or things Portal does by default
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
    </Layout>
  );
}

export default Home;
