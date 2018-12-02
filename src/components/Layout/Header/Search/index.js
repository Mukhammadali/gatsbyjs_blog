import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResponsiveModal from 'react-responsive-modal';
import { Icon } from 'src/elements';

const styles = {
  modal: {
    display: 'flex',
    overflow: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  overlay: {
    padding: 0,
    backgroundColor: '#1cccc'
  },
  closeIcon: {
    fill: '#fff'
  }
};

const Search = props => {
  const { toggleModalVisible, modalVisible } = props;
  return (
    <ResponsiveModal
      open={modalVisible}
      onClose={() => toggleModalVisible(false)}
      styles={styles}
      animationduration={1000}
      focusTrsrced={true}
      closeIconSize={40}
      showCloseIcon={false}
    >
      <SearchInput>
        <Input placeholder="Search..." />
        <a>
          <Icon icon="ios-search" color="#828387" />
        </a>
      </SearchInput>
      <ExtraInfo>Click ESC or click outside input.</ExtraInfo>
    </ResponsiveModal>
  );
};

Search.propTypes = {
  toggleModalVisible: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired
};

export default Search;

const Input = styled.input`
  outline: none;
  border: none;
  text-transform: capitalize;
  color: #fff;
  min-width: 90%;
  background: none;
  &::placeholder {
    color: #828387;
  }
  font-size: 24px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2d2e33;
  padding: 10px 30px;
  border-radius: 2.5rem;
  margin-top: 30px;
  height: 60px;
  width: 30rem;
`;

const ExtraInfo = styled.p`
  font-size: 12px;
  float: right;
  margin: 5px 25px 0px 0px;
  color: #cecece;
`;
