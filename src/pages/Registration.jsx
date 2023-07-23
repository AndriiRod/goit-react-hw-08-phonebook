import RegistrationForm from 'components/RegistrationForm/';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <button onClick={handleClick} type="button">
        back
      </button>
      <RegistrationForm />
    </>
  );
};

export default Registration;
