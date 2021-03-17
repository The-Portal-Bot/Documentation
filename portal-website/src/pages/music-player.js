import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const features = [
  {
    index: 1,
    title: "Type it, Play it!",
    imageUrl: "gif/music_start.gif",
    description: (
      <>
        You don't need to learn any command, simply type the video you wish to
        listen to and Portal will do the rest for you !
      </>
    ),
  },
  {
    index: 2,
    title: "Easy and intuitive",
    imageUrl: "gif/music_play_pause.gif",
    description: (
      <>
        You don't need to type anything to just play and pause.
        <br />
        Simply tap the pause button, and the video is paused.
        <br />
        When you are ready to continue listening, just tap play !
      </>
    ),
  },
  {
    index: 3,
    title: "Sometime you have to listen on repeat",
    imageUrl: "gif/music_pin.gif",
    description: (
      <>
        Is a song stuck in your head, embrace it with pinned videos.
        <br />
        Simply pin the video and Portal will replay it, once it is over.
      </>
    ),
  },
  {
    index: 4,
    title: "Volume controls",
    imageUrl: "gif/music_volume.gif",
    description: (
      <>
        You can control the volume of Portal to streamline the experience for
        all the users, with two simple clicks.
      </>
    ),
  },
  {
    index: 5,
    title: "Add to queue and skip to it",
    imageUrl: "gif/music_queue_skip.gif",
    description: (
      <>
        When requesting a song and Portal already playing a video, it is added
        to the queue. Simple skip to the next song !
      </>
    ),
  },
  {
    index: 6,
    title: "The DJ is in the house",
    imageUrl: "gif/pdj.gif",
    description: (
      <>
        DJ's are important, and that is why there is one ! Simply assign role{" "}
        <b>p.dj</b> to make him a DJ.
      </>
    ),
  },
  {
    index: 7,
    title: "Playlist auto insert",
    imageUrl: "gif/music_volume.gif",
    description: (
      <>
        Automatic playlist insertion. Simply enter the playlist link and start
        listening to your favorite music, without any breaks !
      </>
    ),
  },
  {
    index: 8,
    title: "Finished listening",
    imageUrl: "gif/music_kick.gif",
    description: (
      <>
        Are you done with Portal?
        <br />
        Just show Portal the door and he will clear the queue and leave.
      </>
    ),
  },
];

function Feature({ index, imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("row", styles.feature)}>
      {index % 2 === 0 && imgUrl && (
        <div
          className={clsx(
            "text--center",
            styles.midCut,
            styles.imgPad,
            styles.heroBanner
          )}
        >
          <img src={imgUrl} alt={title} />
        </div>
      )}
      <div className={clsx(styles.midCut, styles.midText)}>
        <h3 className={clsx(index % 2 === 0 ? styles.alignLeft : styles.alignRight)}>{title}</h3>
        <p className={clsx(index % 2 === 0 ? styles.alignLeft : styles.alignRight)}>{description}</p>
      </div>
      {index % 2 !== 0 && imgUrl && (
        <div
          className={clsx(
            "text--center",
            styles.midCut,
            styles.imgPad,
            styles.heroBanner
          )}
        >
          <img src={imgUrl} alt={title} />
        </div>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  return (
    <Layout
      title="Music Player"
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Music Player</h1>
          <p className="hero__subtitle">Easy to use, fast and fun</p>
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
