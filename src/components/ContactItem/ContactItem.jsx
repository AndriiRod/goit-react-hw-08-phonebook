import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

import {
  Item,
  Name,
  Number,
  Img,
  TextWrap,
  DeleteBtn,
  Icon,
} from './ContactItem.styled';

import placeholder from '../../images/placeholder.png';

const ContactItem = ({ id, name, number, avatar }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      <Img src={avatar ? avatar : placeholder} alt="avatar" />
      <TextWrap>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </TextWrap>
      <DeleteBtn
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        <Icon />
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
