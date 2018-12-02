import React from 'react';
import { Icon } from 'src/elements';
import Layout from 'src/components/Layout';

const Page = () => (
  <Layout>
    <h3>Home Page</h3>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Icon icon="ios-search" />
  </Layout>
);

export default Page;
