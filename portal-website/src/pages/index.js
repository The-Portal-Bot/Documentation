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
        <img className={styles.discordImage} src={imageUrl} alt={title} />
      )}
    </Link>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const logo = "img/portal/portal_logo4.png";
  const title = "portal logo";

  return (
    <Layout
      title={'Main'}
      description="Portal main explanation">
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
          <p className={clsx(styles.buttons)}>
            <h1 className={clsx('hero__subtitle', styles.marginRight)}>Portal can be in the center of your server</h1>
            <img className={clsx(styles.featureImage, styles.marginRight)} src={logo} alt={title} />
            <h1 className={clsx('hero__subtitle')}>and help you achieve that you want</h1>
          </p>
          <hr className={clsx('hero__subtitle', styles.horizontalLine)} />
          <p className={clsx('hero__subtitle', styles.marginRight)}>
            With Portal's <Link
              className={clsx(
                styles.linkHighlight,
              )}
              to={useBaseUrl('features/')}>
              Features
            </Link> and <Link
              className={clsx(
                styles.linkHighlight,
              )}
              to={useBaseUrl('commands/')}>
              Commands
            </Link>
            <br />you can have an organised
            and fully functional server in just a few steps
          </p>
        </div>
      </main>

      {/* <main className={clsx('hero hero--primary', styles.flexit, styles.heroBanner)}>
        <div className={clsx('container', styles.heroRest)}>
          <p>
            With Portal's Features and Commands <Link
              className={clsx(
                styles.linkHighlight,
              )}
              to={useBaseUrl('features/')}>
              Features
            </Link> and <Link
              className={clsx(
                styles.linkHighlight,
              )}
              to={useBaseUrl('commands/')}>
              Commands
            </Link>, you can have an organised<br />
            and fully functional server in just a few steps
          </p>
        </div>
      </main> */}

    </Layout>
  );
}

export default Home;
