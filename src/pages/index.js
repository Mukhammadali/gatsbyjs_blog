import React from 'react';
import { Icon } from '../components';
import Layout from '../Layout';

const Page = () => (
  <Layout>
    <h3>Home Page</h3>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Icon name="search" />
  </Layout>
);

export default Page;
