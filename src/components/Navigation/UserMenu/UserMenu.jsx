import { useNavigate } from 'react-router-dom';
import { logOutLocal } from 'redux/auth/tokenSlice';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'redux/auth';
import { useGetCurrentUserQuery } from 'redux/auth';

import { useState } from 'react';

const UserMenu = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logOut] = useLogOutMutation();
  const { data } = useGetCurrentUserQuery(null, { skip: isLoggedOut });

  const handleLogOut = async () => {
    setIsLoggedOut(true);
    await logOut();
    dispatch(logOutLocal());
    navigate('/');
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
