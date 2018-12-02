import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Content from './Content';

const Layout = props => (
  <Container>
    <Header />
    <Content {...props} />
  </Container>
);

export default Layout;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
