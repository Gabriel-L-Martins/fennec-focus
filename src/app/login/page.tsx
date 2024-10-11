import { Lock, User } from 'lucide-react';
import React from 'react';

const Login: React.FC = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-primary-content '>
      <div className='min-w-80 bg-base-100 py-6 px-4 rounded-xl border border-primary-content'>
        <form className='flex flex-col gap-4' action="post">
          <div className='flex flex-col gap-1 mb-2'>
            <h2 className='text-4xl font-semibold'>Welcome Back!</h2>
            <p className='text-lg'>Sign-in back to your account.</p>
          </div>
          <label className="input input-bordered flex justify-between items-center text-secondary-content">
            <input type="text" placeholder="Username" />
            <User/>
          </label>
          <label className="input input-bordered flex justify-between items-center text-secondary-content">
            <input type="password" placeholder="Password" />
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
