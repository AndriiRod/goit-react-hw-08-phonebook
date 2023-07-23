import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/tokenSlice';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRouter = ({ redirectTo = 'contacts', restricted = false }) => {
  const token = useSelector(selectToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRouter;
