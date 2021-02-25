import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function AddButton({ imageUrl, title, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Link
      className={clsx(
        styles.marginRight,
        'button button--outline button--secondary button--lg',
        styles.buttons,
      )}
      to={link}>
      <div className={clsx(styles.marginRightSmall)}>{title}</div> 
      {imgUrl && (
        <img className={styles.discordImage} src={imgUrl} alt={title} />
      )}
    </Link>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <AddButton 
              imageUrl="svg/discord_logo.svg"
              title="Add to Discord" 
              link="https://discord.com/oauth2/authorize?client_id=704400876860735569&permissions=8&redirect_uri=http%3A%2F%2Fwww.localhost%3A4000%2Fpremium%2F&scope=bot"
            />
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Documentation
            </Link>
          </div>
        </div>
      </header>
      <main className={clsx('hero--secondary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">
            With Portal's features and commands, you can have an organised<br />
            and fully functional server in just a few steps
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                styles.marginRight,
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('commands/')}>
              Commands
            </Link> <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('features/')}>
              Features
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
