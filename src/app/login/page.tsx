'use client'

import { Lock, Mail } from 'lucide-react';
import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });        
        if (error) {
            setError(error.message);
        } else {
            console.log('User logged in:', data.user);
        }
    };

    return (
        <div className='min-h-screen flex justify-center items-center text-primary-content '>
            <div className='min-w-80 bg-base-100 py-6 px-4 rounded-xl border border-primary-content'>
                <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                    <div className='flex flex-col gap-1 mb-2'>
                        <h2 className='text-4xl font-semibold'>Welcome Back!</h2>
                        <p className='text-lg'>Sign-in back to your account.</p>
                        {error && <p className='text-red-500'>{error}</p>}
                    </div>
                    <label className="input input-bordered flex justify-between items-center text-secondary-content">
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Mail/>
                    </label>
                    <label className="input input-bordered flex justify-between items-center text-secondary-content">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Lock/>
                    </label>
                    <button className='btn btn-primary'>Login</button>
                    <div className='flex justify-center'>
                        <span className='text-primary-content text-sm'>Don't have an account? <a href='/register' className='link'>Sign Up Now</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
