import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

import AppNav from 'components/Navigation/AppNav/';

import AddContact from 'pages/AddContact';
import Contacts from 'pages/Contacts';
import Registration from 'pages/Registration';
import Login from 'pages/Login';
import Home from 'pages/Home';

import { Container } from './App.styled';
import PrivateRouter from 'components/PrivateRoute';
import PublicRouter from 'components/PublicRouter';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectToken } from 'redux/auth/tokenSlice';

const App = () => {
  const token = useSelector(selectToken);

  return (
    <Container>
      {token && <AppNav />}
      <Routes>
        <Route element={<PublicRouter restricted />}>
          <Route path="/" element={<Home />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/log" element={<Login />} />
        </Route>

        <Route element={<PrivateRouter />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/addContact" element={<AddContact />} />
        </Route>
      </Routes>
      <ToastContainer theme="colored" />
    </Container>
  );
};

export default App;
