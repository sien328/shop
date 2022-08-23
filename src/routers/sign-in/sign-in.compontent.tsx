import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.compontent';

import './sign-in.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>

      <SignUpForm/>
    </div>
  );
}

export default SignIn;