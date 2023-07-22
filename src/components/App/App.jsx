import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/';
import AddContact from 'pages/AddContact';
import Contacts from 'pages/Contacts';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Contacts />} />
          <Route path="addContact" element={<AddContact />} />
        </Route>
      </Routes>
      <ToastContainer theme="colored" />
    </>
  );
};

export default App;
