import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = route => {
    navigate(route);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('/reg')} type="button">
        Create Account
      </button>
      <button onClick={() => handleButtonClick('/log')} type="button">
        Login
      </button>
    </div>
  );
};

export default Home;
