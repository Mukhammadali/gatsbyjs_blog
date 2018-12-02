import React from 'react';
import { Link } from 'gatsby';
import { compose, withState } from 'recompose';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'src/elements';
import menu from './menu.json';
import theme from '../../../lib/theme';
import Search from './Search';

const Header = props => {
  const { modalVisible, toggleModalVisible } = props;
  return (
    <Container>
      <Navbar>
        <Link to="/">
          <Logo>MNews</Logo>
        </Link>
        <RightContainer>
          <Menu>
            {menu.menu_items.map((item, index) => (
              <MenuItem
                to={item.href}
                key={index}
                active={(window.location.pathname === item.href).toString()}
              >
                {item.title}
              </MenuItem>
            ))}
          </Menu>
          <SearchBtn onClick={() => toggleModalVisible(true)}>
            <Icon icon="ios-search" fontSize={27} />
          </SearchBtn>
          <Search
            modalVisible={modalVisible}
            toggleModalVisible={toggleModalVisible}
          />
        </RightContainer>
      </Navbar>
    </Container>
  );
};

Header.propTypes = {
  toggleModalVisible: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired
};

export default compose(withState('modalVisible', 'toggleModalVisible', false))(
  Header
);

const Navbar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  display: flex;
  overflow: hidden;
  font-size: 40px;
  font-weight: bold;
  max-width: 100%;
  margin-right: 1.5rem;
  align-items: center;
  color: ${theme.colors.accent};
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 1252px;
  height: 90px;
  justify-content: center;
`;

const SearchBtn = styled.a`
  display: flex;
  margin-left: 50px;
`;

const MenuItem = styled(Link)`
  display: inline-block;
  margin: 0px 15px;
  color: ${({ active }) =>
    active === 'true' ? theme.colors.accent : theme.colors.primary};
`;

const Menu = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: outside none none;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  padding-bottom: 0;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
