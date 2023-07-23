import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/';
import Loader from 'components/Loader/Loader';

import { selectFilter } from 'redux/selectors';

import { List } from './ContactsList.styled';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const { data, error, isLoading } = useGetContactsQuery();

  const getVisibleContact = () => {
    const contacts = data;

    if (filter === '') {
      return contacts;
    }
    const formatFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) => {
      const formatName = name.toLowerCase().trim();
      return formatName.includes(formatFilter);
    });
  };

  const visibleContact = getVisibleContact();

  return (
    <>
      {isLoading && <Loader />}
      {error && toast.error(error.message)}
      {visibleContact?.length !== 0 && (
        <List>
          {visibleContact?.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
