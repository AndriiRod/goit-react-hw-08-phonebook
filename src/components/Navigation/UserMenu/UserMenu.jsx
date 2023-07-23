import { useNavigate } from 'react-router-dom';
import { logOutLocal } from 'redux/auth/tokenSlice';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'redux/auth';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logOut] = useLogOutMutation();

  const handleLogOut = async () => {
    await logOut();
    dispatch(logOutLocal());
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
