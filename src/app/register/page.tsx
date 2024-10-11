'use client'

import { Home, Lock, Mail, User } from 'lucide-react';
import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';

const Register: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        if (error) {
            setError(error.message);
        } else {
            console.log('User registered:', data.user);
        }
        
    };

    return (
        <div className='min-h-screen flex justify-center items-center text-primary-content '>
            <div className='min-w-80 bg-base-100 py-6 px-4 rounded-xl border border-primary-content'>
                <form className='flex flex-col gap-4' onSubmit={handleRegister}>
                    <div className='flex flex-col gap-1 mb-2'>
                        <h2 className='text-4xl font-semibold'>Get Started</h2>
                        <p className='text-lg'>Create a new account.</p>
                        {error && <p className='text-red-500'>{error}</p>}
                    </div>
                    <label className="input input-bordered flex justify-between items-center text-secondary-content">
                        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        <User />
                    </label>
                    <label className="input input-bordered flex justify-between items-center text-secondary-content">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Mail />
                    </label>
                    <label className="input input-bordered flex justify-between items-center text-secondary-content">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Lock />
                    </label>
                    <button className='btn btn-primary'>Register</button>
                    <div className='flex justify-center'>
                        <span className='text-primary-content text-sm'>Have an account? <a href='/login' className='link'>Sign In Now</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
