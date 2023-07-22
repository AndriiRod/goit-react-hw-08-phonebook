import { Outlet } from 'react-router-dom';

import {
  Section,
  Header,
  Nav,
  NavLinkWrap,
  Counter,
} from './SharedLayout.styled';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const SharedLayout = () => {
  const { data } = useGetContactsQuery();

  return (
    <Section>
      <Header>
        <Nav>
          <NavLinkWrap to="/">
            Contacts <Counter>{data?.length}</Counter>
          </NavLinkWrap>
          <NavLinkWrap to="/addContact">Add New Contact</NavLinkWrap>
        </Nav>
      </Header>
      <Outlet />
    </Section>
  );
};

export default SharedLayout;
