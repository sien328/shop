import {useState} from 'react';
import './sign-in-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.compontent';
import { signInWithGooglePopup, signInUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils/firebase.utils';

const defaultFormFields = {
  email: "",
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error:any) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break
        case "auth/user-not-found":
          alert('no user associated with this email');
          break
        default:
          console.log(error);
      }
    }

  }

  const handleChange = (e:any) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          type="email" 
          name='email' 
          value={email}
          onChange={handleChange}  
        />
        <FormInput 
          label="Password"
          type="password" 
          name='password' 
          value={password}
          onChange={handleChange}    
        />
        <div className='buttons-container'>
          <Button buttonType="submit" >Sign In </Button>
          <Button buttonType="google" onClick={signInWithGoogle} >Google Sign In </Button>
        </div>
      </form>

    </div>
  );
}

export default SignInForm;