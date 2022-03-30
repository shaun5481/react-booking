import React, { useState, useEffect}  from 'react';
import { Auth, Hub } from 'aws-amplify';
import './SignUp.css';



const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signUp'
  }
  
function SignUp(props) {
    const [formState, updateFormState] = useState(initialFormState)
    const [user, updateUser] = useState(null)
    useEffect(() => {
      
      setAuthListener()
    }, [])

    async function setAuthListener() {
      Hub.listen('auth', (data) => {
        switch (data.payload.event) {
          case 'signOut':
            updateFormState(() =>({ ...formState, formType: "signUp" }))
              break;
          default:
            break
        }
      });
    }

    function onChange(e) {
        e.persist()
        updateFormState(() =>({ ...formState,  [e.target.name]: e.target.value }))
      }

      const { formType } = formState

      async function signUp() {
        const { username, email, password } = formState
        await Auth.signUp({ username, password, attributes: { email } })
        updateFormState(() =>({ ...formState, formType: "confirmSignUp" }))
      }
      async function confirmSignUp() {
        const { username, authCode } = formState
        await Auth.confirmSignUp(username, authCode )
        updateFormState(() =>({ ...formState, formType: "signIn" }))
      }
      async function signIn() {
        const { username, password } = formState
        await Auth.signIn(username, password )
        updateFormState(() =>({ ...formState, formType: "signedIn" }))
        props.history.push('/home');
       }
    return (
        <div className="box-container">
            {
        formType === 'signUp' && (
          <div className='form-inner'>
            <h2>Sign up</h2>
            <div className='form-group'><input name="username" onChange={onChange} placeholder="username" required /><br /></div>
            <div className='form-group'><input name="password" type="password" onChange={onChange} placeholder="password" required /><br /></div>
            <div className='form-group'><input name="email" onChange={onChange} placeholder="email" required  /><br /></div>
            <button onClick={signUp}>Sign Up</button>
            <button onClick={() => updateFormState(() =>({
              ...formState, formType: "signIn"
            }))}>Sign In</button>
          </div>
        )
      }
       {
        formType === 'confirmSignUp' && (
          <div className='form-inner'>
            <h2>Confirmation Code</h2>
            <input name="authCode" onChange={onChange} placeholder="Confirmation Code" required /><br /><br />
            <button onClick={confirmSignUp}>Confirm signUp</button>
          </div>
        )
      }
      {
        formType === 'signIn' && (
          <div className='form-inner'>
            <h2>Sign In</h2>
            <div className='form-group'><input name="username" onChange={onChange} placeholder="username" required /><br /></div>
            <div className='form-group'><input name="password" type="password" onChange={onChange} placeholder="password" required /><br /></div>
            <button onClick={signIn}>Sign In</button>
          </div>
        )
      }
      
        </div>
    )
}

export default SignUp
