import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { Input, Label, Icon } from './FindField.styled';

import { selectFilter } from 'redux/selectors';
import { search } from 'redux/filter/slice';

const FindField = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const onChangeHuddler = e => {
    dispatch(search(e.target.value));
  };

  return (
    <Label>
      <Icon />
      <Input
        placeholder="Contacts"
        type="text"
        value={value}
        onChange={onChangeHuddler}
      />
    </Label>
  );
};

export default FindField;

FindField.propTypes = {
  value: PropTypes.string,
};
