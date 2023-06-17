import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGetEmail = e => {
        setEmail(e.target.value);
    }
    const handleGetPassword = e => {
        setPassword(e.target.value);
    }
    const handleGetConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }
    const handleSignUp = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't matched!");
            return;
        }
        if (password.length < 6) {
            setError("Password must be more than 8 characters!");
            return;
        }
        setError('');
        createUserWithEmailAndPassword(email, password).then(() => toast.success('Sign Up Successfully!'));
    }
    return (
        <div className='form-container'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleGetEmail} type="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handleGetPassword} type="password" name="password" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleGetConfirmPassword} type="password" name="confirm_password" required />
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <input className='submit-btn' type="submit" value="Sign Up" />
            </form>
            <p>Already have an Account? <Link className='form-link' to='/signIn'>Sign In</Link></p>
            <div className='or'>
                <p className='line'></p>
                <p>or</p>
                <p className='line'></p>
            </div>
            <button onClick={handleGoogleSignIn} className='google-signIn'>Continue with Google</button>
        </div>
    );
};

export default SignUp;