import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setToken } from 'redux/auth/tokenSlice';
import { useNavigate } from 'react-router-dom';

import { useSigUpMutation } from 'redux/auth';

const RegistrationForm = () => {
  const [createUser] = useSigUpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const inputNameId = nanoid(6);
  const inputEmailId = nanoid(6);
  const inputPassId = nanoid(6);

  const handleSubmitForm = async data => {
    try {
      const response = await createUser(data);
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
      <label htmlFor="inputNameId">Name</label>
      <input
        id={inputNameId}
        type="text"
        {...register('name', { required: true })}
      />
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
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;
