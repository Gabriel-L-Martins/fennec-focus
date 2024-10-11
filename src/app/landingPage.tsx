import React from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='text-primary-content flex justify-between items-center px-16'>
                <div className='flex flex-col space-y-12'>
                    <h1 className="max-w-xl text-6xl font-bold leading-tight">
                        Master Your Studies Using {''}
                        <span className='bg-gradient-to-r from-accent to-secondary gradient-text'>
                            Fennec Focus {''}
                        </span>
                        with Ease
                    </h1>
                    <div>
                        <a href='/register'>
                            <button className='btn btn-lg btn-wide btn-primary'>
                                Start Now!
                            </button>
                        </a>
                    </div>
                </div>
                <Image src="https://placehold.co/400x600" className='rounded-lg invert' alt='Placeholder' width={400} height={600}/>
            </div>
        </div>
    );
};

export default LandingPage;
