import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const urlInvite = 'https://discord.com/oauth2/authorize?client_id=704400876860735569&permissions=8&redirect_uri=http%3A%2F%2Fwww.localhost%3A4000%2Fpremium%2F&scope=bot';

function AddButton({ imageUrl, title, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Link
      className={clsx(
        styles.marginRight,
        styles.marginBottomSmall,
        'button button--outline button--secondary button--lg',
        styles.buttons,
        styles.minWidth
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
  const logo = "img/portal/portal_logo.png";
  const title = "portal logo";

  return (
    <Layout
      title={'Main'}
      description="Portal main">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={clsx(styles.buttons, styles.aligner)}>
            <AddButton
              className={clsx(styles.marginBottom)}
              imageUrl="svg/discord_logo.svg"
              title="Add to Discord"
              link={urlInvite}
            />
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.minWidth
              )}
              to={useBaseUrl('docs/')}>
              Documentation
            </Link>
          </div>
        </div>
      </header>

      <main className={clsx('hero--secondary', styles.heroBanner)}>
        <div className="container">
          <p className={clsx(styles.buttons, styles.aligner)}>
            <h1 className={clsx('hero__subtitle', styles.alignRight, styles.minMax)}>Portal can be the center of your server</h1>
            <img className={clsx(styles.featureImage, styles.marginLeft, styles.marginRight)} src={logo} alt={title} />
            <h1 className={clsx('hero__subtitle', styles.alignLeft, styles.minMax)}>and help you organise and grow it</h1>
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
            </Link><br />
            you can have an organised
            and fully functional server in just a few steps.<br /><br />
            The <Link
              className={clsx(
                styles.linkHighlight,
              )}
              to={useBaseUrl('interpreter/')}>
              Text Interpreter
            </Link> is a program used to generate channel names.<br />
            You can create anything you want !
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
