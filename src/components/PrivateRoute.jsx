import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/tokenSlice';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = ({ redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};
export default PrivateRouter;
