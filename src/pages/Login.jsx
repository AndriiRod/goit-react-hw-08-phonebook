import LoginFrom from 'components/LoginFrom/';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <button onClick={handleClick} type="button">
        back
      </button>
      <LoginFrom />
    </>
  );
};

export default Login;
