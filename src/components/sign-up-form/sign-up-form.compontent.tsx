import {useState} from 'react';
import './sign-up-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.compontent';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: "",
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
   
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    try {
      const userCred:any = await createAuthUserWithEmailAndPassword(email, password);
      
      await createUserDocumentFromAuth(userCred.user, { displayName });
      resetFormFields();
    } catch (error:any) {
      if(error.code === 'auth/weak-password') {
        alert("Password to weak, at least 6 letters long")
      }else if (error.code === 'auth/email-already-in-use') {
        alert("User email is already in use")
      }
      console.log("User create ran into an error", error);
    }

  }

  const handleChange = (e:any) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput 
          label="DisplayName"
          type="text" 
          name='displayName' 
          value={displayName}
          onChange={handleChange}  
        />
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
        <FormInput 
          label="Comfirm Password"
          type="password" 
          name='confirmPassword' 
          value={confirmPassword}
          onChange={handleChange}     
        />

        <Button buttonType="submit" >Sign Up </Button>
      </form>

    </div>
  );
}

export default SignUpForm;