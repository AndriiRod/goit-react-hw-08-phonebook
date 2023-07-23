import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

import AppNav from 'components/Navigation/AppNav/';

import AddContact from 'pages/AddContact';
import Contacts from 'pages/Contacts';
import Registration from 'pages/Registration';
import Login from 'pages/Login';
import Home from 'pages/Home';

import { useGetCurrentUserQuery } from 'redux/auth';

import { Container } from './App.styled';

const App = () => {
  const { data } = useGetCurrentUserQuery();
  return (
    <Container>
      {data && <AppNav />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reg" element={<Registration />} />
        <Route path="/log" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/addContact" element={<AddContact />} />
      </Routes>
      <ToastContainer theme="colored" />
    </Container>
  );
};

export default App;
