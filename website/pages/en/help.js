/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
    const { config: siteConfig, language = '' } = props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      title: 'Browse Docs',
      content: `Learn more using the [documentation](${docUrl('doc1.html')}) ` +
        `for Portal`,
    },
    {
      title: 'Join our community',
      content: 'Ask questions about the documentation and Portal at the official Portal server',
    },
    {
      title: 'Keep up with the latest updates',
      content: `Find out what's new with Portal by following the latests ` +
        `[updates](${docUrl('doc1.html')}).`,
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need Help ?</h1>
          </header>
          {/* <p>This project is maintained by Keybraker</p> */}
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;