import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Portal can be your one-way to an organised server',
    imageUrl: 'svg/teleport.svg',
    description: (
      <>
        With Portal you can have one voice-channel to rule them all.
        Simply create a portal channel with `./portal my_portal` and
        you can have unlimited voice channels that will be dynamically
        named and deleted upon when the last member has left it.
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
        you get the highest quality and speed there is
        Just type `./music portal_music` and a new channel will appear.
        You now just need to type what you want and Portal will be there
        to play it for you! And when you wish to pause or anything else
        just react to the player with the appropriate emote.
      </>
    ),
  },
  {
    title: 'More Features',
    imageUrl: 'svg/features2.svg',
    description: (
      <>
        Portal has many usefull features you can use, from informative like
        `./corona gr` and `./weather Athens` to funny ones, like `./joke`
        and even more usefull once like. For more on commands click
        [here](www.google.com) to see a list of many more commands, and
        many novel ones like `./focus` !
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
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Commands</h1>
          <p className="hero__subtitle">
            One command away of greatness
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
