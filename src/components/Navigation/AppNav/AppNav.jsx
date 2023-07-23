import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import UserMenu from '../UserMenu/';

import { NavLinkWrap, Counter, Header, Nav } from '../Navigation.styled';

const AppNav = () => {
  const { data } = useGetContactsQuery();
  return (
    <Header>
      <Nav>
        <NavLinkWrap to="/contacts">
          Contacts <Counter>{data?.length}</Counter>
        </NavLinkWrap>
        <NavLinkWrap to="/addContact">Add New Contact</NavLinkWrap>
        <UserMenu />
      </Nav>
    </Header>
  );
};
export default AppNav;
