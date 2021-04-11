import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
import TextLoop from "react-text-loop";

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
        Coded with attention to speed, robust and reliable.
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
        Portal does not kick or ban, it mutes and silences users
        that are not respecting the server. [under maintenance]
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

function LoopingText({ start, sentences, end }) {
  return (
    <div>
      { start}{" "}
      <TextLoop
        noWrap={true}
        interval={3000}
        adjustingSpeed={100}
        mask={true}
        springConfig={{ stiffness: 700, damping: 100 }}>
        {sentences.map((sentence, idx) => (
          <div key={idx}>
            <b>
              {sentence.line}
            </b>
          </div>
        ))}
      </TextLoop>
      {" "}{end}
    </div>
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
        <div className={clsx("container", styles.alignCenter)}>
          <h1 className={clsx("hero__title", styles.alignCenter)}>{siteConfig.title}</h1>
          <div className={clsx("hero__subtitle", styles.alignCenter, styles.marginBottomAlways)}>
            {siteConfig.tagline}
            <LoopingText
              // start={"you will"}
              sentences={[
                { line: "organise your server with just a few channels", link: "/docs/commands/detailed/portal" },
                { line: "a music channel that just works effortlessly", link: "/docs/commands/detailed/news" },
                { line: "make members moderators with just one click", link: "/docs/commands/detailed/kick" },
                { line: "increase engagement with amazing features", link: "/docs/commands/detailed/news" },
                { line: "keep you server and channel clean and civil", link: "/docs/commands/detailed/vendor" },
                { line: "with anti spam build-in, you can keep chill", link: "/docs/commands/detailed/vendor" },
                { line: "award engagment with rak-ups and roles", link: "/docs/commands/detailed/news" },
                { line: "easily distribute roles to members with reacts", link: "/docs/commands/detailed/news" }
              ]}
            // end={"server in just a few steps."}
            />
          </div>
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
            Portal has many{" "}
            <Link
              className={clsx(styles.linkHighlight)}
              to={useBaseUrl("commands/")}
            >
              Commands
            </Link>{" "}to aid in<br />moderation, automation
            {" "}and organisation of your server.
            <br />
            <br />
            With a sublime and easy to use{" "}
            <Link
              className={clsx(styles.linkHighlight)}
              to={useBaseUrl("music-player/")}
            >
              Music Player
            </Link>
            <br />
            you can listen to what you want, however you want.
            <br />

            <br />
            With the help of the{" "}
            <Link
              className={clsx(styles.linkHighlight)}
              to={useBaseUrl("docs/interpreter/description/")}
            >
              Text Interpreter
            </Link>{" "}you can create
            <br />
            just about any custom channel name you want.
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
