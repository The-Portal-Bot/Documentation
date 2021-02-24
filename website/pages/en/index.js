/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
        render() {
                const { siteConfig, language = '' } = this.props;
                const { baseUrl, docsUrl } = siteConfig;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          {/* <PromoSection>
            <Button href="#try">Features</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>There are more than one reasons, to fall in love with Portal</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const MusicPlayer = () => (
      <Block id="try">
        {[
          {
            content:
              'Music players have become an essential part of every discord community and thus server. ' +
              'With Portal you not only get a clutter free server whilst having an easy to use music player, ' +
              'you get the highest quality and speed there is !' +
              'Just type `./music portal_music` and a new channel will appear. You now just need to type what you want ' +
              'and Portal will be there to play it for you! And when you wish to pause or anything else just react to the ' +
              'player with the appropriate emote.',
            image: `${baseUrl}gif/spawn.gif`,
            imageAlign: 'left',
            title: 'Music Player',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Portal has many usefull features you can use, from informative like `./corona gr` and `./weather Athens` ' +
              'to funny ones, like `./joke` and even more usefull once like. ' +
              'For more on commands click [here](www.google.com) to see a list of many more commands, and many novel ones ' +
              'like `./focus` !',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'More Features',
          },
        ]}
      </Block>
    );

    const PortalSpawner = () => (
      <Block background="light">
        {[
          {
            content:
              'With Portal you can have one voice-channel to rule them all.<br>' +
              'Simply create a portal channel with `./portal my_portal` and you can have unlimited voice channels ' +
              'that will be dynamically named and deleted upon when the last member has left it.',
            image: `${baseUrl}gif/spawn.gif`,
            imageAlign: 'right',
            title: 'Portal can be your one-way to an organised server',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: '24/7 online, so you never miss a thing !',
            image: `${baseUrl}svg/fast-time.svg`,
            imageAlign: 'top',
            title: '99% up time',
          },
          {
            content: 'you can customise every aspect of portal to your liking and personalising it ' +
              'so it fits your needs best !',
            image: `${baseUrl}svg/focus.svg`,
            imageAlign: 'top',
            title: 'Fast and Customisable',
          },
          {
            content: 'Portal respects your server and removes all unnecessary messages to reduce clutter.',
            image: `${baseUrl}svg/priority.svg`,
            imageAlign: 'top',
            title: 'Auto cleanup',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Portal is a labor of love</h2>
          <p>Voice channels on demand (with auto-name update)</p>
          <p>Assigns and strips roles from users with a single reaction</p>
          <p>Creates temporary "focus" channels for private conversations</p>
          <p>Music player that is clean and clutter free</p>
          <p>Portal will keep you up to speed, with voice announcements</p>
          <p>Get the latest on the corona virus and current weather</p>
          <p>Spotify / Announcement / URL-only channels</p>
          {/* <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div> */}
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          <PortalSpawner />
          <MusicPlayer />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;