import { useNavigate } from 'react-router-dom';
import { logOutLocal } from 'redux/auth/tokenSlice';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'redux/auth';
import { useGetCurrentUserQuery } from 'redux/auth';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/tokenSlice';

const UserMenu = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logOut] = useLogOutMutation();
  const { data } = useGetCurrentUserQuery(null, { skip: !token });

  const handleLogOut = async () => {
    await logOut();
    dispatch(logOutLocal());
    navigate('/log');
  };
  return (
    <div>
      <p>{data?.email}</p>
      <button onClick={handleLogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
