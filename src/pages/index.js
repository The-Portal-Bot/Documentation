import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const urlInvite =
  "https://discord.com/oauth2/authorize?client_id=704400876860735569&permissions=8&redirect_uri=http%3A%2F%2Fwww.localhost%3A4000%2Fpremium%2F&scope=bot";

const features = [
  {
    title: "99% up time",
    imageUrl: "svg/uptime.svg",
    description: <>24/7 online, so you never miss a thing.</>,
  },
  {
    title: "Auto cleanup",
    imageUrl: "svg/clean.svg",
    description: (
      <>
        Portal respects your server and removes all unnecessary messages to
        reduce clutter.
      </>
    ),
  },
  {
    title: "Fast",
    imageUrl: "svg/fast_time.svg",
    description: (
      <>
        Coded with attention to be fast, robust and reliable. Hosted online so
        it never missed a click.
      </>
    ),
  },
  {
    title: "Customisable",
    imageUrl: "svg/customisable.svg",
    description: (
      <>Every server is different, so Portal is unique for every one of them.</>
    ),
  },
  {
    title: "Anti Spam",
    imageUrl: "svg/spam.svg",
    description: (
      <>
        Portal will warn members if they are spamming. Commands that are prown
        to spamming have cooldowns so that spamming is avoided.
      </>
    ),
  },
  {
    title: "Music Quality",
    imageUrl: "svg/music.svg",
    description: (
      <>
        The easiest way to add music to your server. there your are only one
        channel and one name away of your songs !
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

function AddButton({ imageUrl, title, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Link
      className={clsx(
        styles.marginRight,
        styles.marginBottomSmall,
        "button button--outline button--secondary button--lg",
        styles.buttons,
        styles.minWidth
      )}
      to={link}
    >
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
    <Layout title={"Main"} description="Portal main">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
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
                "button button--outline button--secondary button--lg",
                styles.getStarted,
                styles.minWidth
              )}
              to={useBaseUrl("docs/")}
            >
              Documentation
            </Link>
          </div>
        </div>
      </header>

      <main className={clsx("hero--secondary", styles.heroBanner)}>
        <div className="container">
          <p className={clsx("hero__subtitle", styles.marginRight)}>
            With Portal's{" "}
            <Link
              className={clsx(styles.linkHighlight)}
              to={useBaseUrl("features/")}
            >
              Features
            </Link>{" "}
            and{" "}
            <Link
              className={clsx(styles.linkHighlight)}
              to={useBaseUrl("commands/")}
            >
              Commands
            </Link>
            <br />
            you can have an organised and fully functional server in just a few
            steps.
            <br />

            <br />
            The{" "}
            <Link
              className={clsx(styles.linkHighlight)}
              to={useBaseUrl("interpreter/")}
            >
              Text Interpreter
            </Link>{" "}
            is a program used to generate channel names.
            <br />
            You can create anything you want !
          </p>
        </div>
      </main>

      <main className={clsx("hero--`secondary`", styles.heroBanner)}>
        {features && features.length > 0 && (
          <section className={styles.features_no_padding}>
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

      <main className={clsx("hero--secondary", styles.heroBanner)}>
        <div className="container">
          <span className={clsx(styles.buttons, styles.aligner)}>
            <h1
              className={clsx(
                "hero__subtitle",
                styles.alignRight,
                styles.minMax
              )}
            >
              Portal can be the center of your server
            </h1>
            <img
              className={clsx(
                styles.featureImage,
                styles.marginLeft,
                styles.marginRight
              )}
              src={logo}
              alt={title}
            />
            <h1
              className={clsx(
                "hero__subtitle",
                styles.alignLeft,
                styles.minMax
              )}
            >
              and help you organise and grow it
            </h1>
          </span>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
