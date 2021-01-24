import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/context';


export default function useAuthorization() {
  const history = useHistory()
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, []);

  return {
    user,
    setUser,
    history
  }
}