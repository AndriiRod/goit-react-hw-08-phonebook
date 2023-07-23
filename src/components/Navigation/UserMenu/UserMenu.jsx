import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/tokenSlice';
import { useDispatch } from 'react-redux';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/log');
  };

  return (
    <div>
      <p>mango@mail.com</p>
      <button onClick={handleLogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
