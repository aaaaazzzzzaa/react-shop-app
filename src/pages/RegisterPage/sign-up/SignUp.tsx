import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../../components/form/Form'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user/user.slice';
import { setUserId } from '../../../store/cart/cart.slice';

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const handleSignupAndLogin = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        dispatch(setUser({
            email: userCredential.user.email,
            token: userCredential.user.refreshToken,
            id: userCredential.user.uid
        }))
        dispatch(setUserId(userCredential.user.uid));
        navigate('/');
    })
    .catch(error => {
        return error && setFirebaseError("이미 존재하는 회원입니다.");
    }) 
  }

  return (
    <Form
      title={"가입하기"}
      getDataForm={handleSignupAndLogin}
      firebaseError={firebaseError}
    />
  )
}

export default SignUp