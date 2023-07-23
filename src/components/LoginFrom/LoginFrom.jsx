import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useLogInMutation } from 'redux/auth';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/tokenSlice';
import { useNavigate } from 'react-router-dom';

const LoginFrom = () => {
  const [loginUser] = useLogInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const inputEmailId = nanoid(6);
  const inputPassId = nanoid(6);

  const handleSubmitForm = async data => {
    try {
      const response = await loginUser(data);
      if (response.data) {
        dispatch(setToken(response.data.token));
        navigate('/contacts');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor="inputEmailId">Email</label>
      <input
        id={inputEmailId}
        type="email"
        {...register('email', { required: true })}
      />
      <label htmlFor="inputPassId">Password</label>
      <input
        id={inputPassId}
        type="password"
        {...register('password', { required: true })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFrom;
