import React from 'react';
import styled from 'styled-components';

const Content = props => {
  return <Container>{props.children}</Container>;
};

export default Content;

const Container = styled.div`
  width: 100%;
`;
