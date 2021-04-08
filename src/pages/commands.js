import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Your one-way to an organised server",
    imageUrl: "svg/teleport.svg",
    description: (
      <>
        With Portal you can have one voice-channel to rule them all. Simply
        create a portal channel which allows you to have, unlimited voice channels
        that will be dynamically named, updated and deleted when everyone has them.
      </>
    ),
  },
  {
    title: "Music Player",
    imageUrl: "svg/music_notes.svg",
    description: (
      <>
        Music players have become an essential part of every discord community
        and thus server. With Portal you not only get a clutter free server, button
        also, an easy to use music player.
      </>
    ),
  },
  {
    title: "Even more",
    imageUrl: "svg/features2.svg",
    description: (
      <>
        Portal has many more commands for you to use, find them all in the docs.
        From url-only channels to role-assigning messages Portal has you covered !
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
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
      description="All Commnads"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Commands</h1>
          <p className="hero__subtitle">One command away from greatness</p>
          <div className="container">
            <h3 className="hero__title">
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg",
                  styles.getStarted
                )}
                to={useBaseUrl("docs/commands/description")}
              >
                Command Docs
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
