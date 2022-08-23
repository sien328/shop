import SignUpForm from '../../components/sign-up-form/sign-up-form.compontent';
import SignInForm from '../../components/sign-in-form/sign-in-form.compontent';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
}

export default Authentication;