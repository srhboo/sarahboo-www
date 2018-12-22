import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BigText from '../components/big-text';
import Square from '../components/square';
import Block from '../components/block';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`sarah boo`]} />
    <Block padding="2rem" flexDirection="column" alignItems="center">
      <Block flexDirection="column">
        <Square colour="LightSalmon" content="sq" />
        <Square colour="Salmon" content="sq" />
        <Square colour="DarkSalmon" content="sq" />
        <Square colour="LightCoral" content="sq" />
        <Square colour="RosyBrown" content="sq" />
        <Square colour="DarkSlateBlue" content="sq" />
        <Square colour="blue" content="sq" />
      </Block>
      <Block padding="1rem 0 0 0">
        <BigText>bbb</BigText>
      </Block>
      <Block>
        <BigText>bb</BigText>
      </Block>
      <Block>
        <BigText>b</BigText>
      </Block>
      <Block>
        <BigText>q</BigText>
      </Block>
      <Block>
        <BigText>qq</BigText>
      </Block>
      <Block padding="0 0 1rem 0">
        <BigText>qqq</BigText>
      </Block>
      <Block flexDirection="column">
        <Square colour="Firebrick" content="bs" />
        <Square colour="Teal" content="bs" />
        <Square colour="LightSeaGreen" content="bs" />
        <Square colour="DarkSeaGreen" content="bs" />
      </Block>
    </Block>
  </Layout>
);

export default IndexPage;
