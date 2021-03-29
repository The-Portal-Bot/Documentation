import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Your one-way to an organised server',
    imageUrl: 'svg/teleport.svg',
    description: (
      <>
        With Portal you can have one voice-channel to rule them all.
        Simply create a portal channel (with portal command) and
        you can have unlimited voice channels that will be dynamically
        named and deleted when the last member has left it.
      </>
    ),
  },
  {
    title: 'Music Player',
    imageUrl: 'svg/music_notes.svg',
    description: (
      <>
        Music players have become an essential part of every discord
        community and thus server. With Portal you not only get a clutter
        free server whilst having an easy to use music player,
        you get the highest quality music there is.
      </>
    ),
  },
  {
    title: 'More Features',
    imageUrl: 'svg/features2.svg',
    description: (
      <>
        Portal has many usefull features you can use, from informative commands
        like <b>./corona gr</b> and <b>./weather Athens</b> to funny ones, like <b>./joke</b> and
        even more usefull once like <b>./focus</b> and <b>./url</b> !
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
      title="Commands"
      description="Commands">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Commands</h1>
          <p className="hero__subtitle">
            One command away from greatness
          </p>
          <div className="container">
            <h3 className="hero__title">
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/commands/')}>
                All Commands
              </Link>
            </h3>
          </div>
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
