import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = props => {
  return <Container>{props.children}</Container>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;

const Container = styled.div`
  width: 100%;
`;
