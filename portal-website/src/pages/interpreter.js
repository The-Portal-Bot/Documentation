import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Variables',
    imageUrl: 'svg/variables.svg',
    description: (
      <>
        Variables are immutable and live data that return information.
      </>
    ),
  },
  {
    title: 'Attributes',
    imageUrl: 'svg/attributes.svg',
    description: (
      <>
        Attributes are Portal Bot's, Portal Voice or Voice Channel options that can be manipulated by whomever has clearance.
      </>
    ),
  },
  {
    title: 'Pipes',
    imageUrl: 'svg/pipes.svg',
    description: (
      <>
        Pipes are mini functions you can pass text or Variables to manipulate their outcome.
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
      title="Text Interpreter"
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Text Interpreter</h1>
          <p className="hero__subtitle">
          Is used by Portal when generateing channel names.
          </p>
          <div className="container">
            <h3 className="hero__title">
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/interpreter/description')}>
                Text Interpreter Docs
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
