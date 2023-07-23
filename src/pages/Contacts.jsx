import ContactsList from 'components/ContactsList/';
import FindField from 'components/FindField/';
import { useGetCurrentUserQuery } from 'redux/auth';

const Contacts = () => {
  // const { data } = useGetCurrentUserQuery();
  return (
    <>
      <FindField />
      <ContactsList />
    </>
  );
};

export default Contacts;
