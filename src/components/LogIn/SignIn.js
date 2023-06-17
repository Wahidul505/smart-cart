import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignIn.css';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleGetEmail = e => {
        setEmail(e.target.value);
    }
    const handleGetPassword = e => {
        setPassword(e.target.value);
    }
    const handleSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    // if(user){
    //     toast.success('Sign In Successfully!', {id:'success'});
    //     navigate(from, {replace:true});
    // }
    useEffect(() => {
        if (user) {
            console.log('success');
            toast.success('Sign In Successfully!', { id: 'success' });
            navigate(from, { replace: true });
        }
    }, [from, navigate, user]);

    return (
        <div className='form-container'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className='form-title'>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleGetEmail} type="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handleGetPassword} type="password" name="password" required />
                </div>
                {
                    loading && <p>Loading...</p>
                }
                <p style={{ color: 'red' }}>{error?.message}</p>
                <input className='submit-btn' type="submit" value="Sign In" />
            </form>
            <p>New to Ema-John? <Link className='form-link' to='/signUp'>Create New Account</Link></p>
            <div className='or'>
                <p className='line'></p>
                <p>or</p>
                <p className='line'></p>
            </div>
            <button onClick={handleGoogleSignIn} className='google-signIn'>Continue with Google</button>
        </div>
    );
};

export default SignIn;