import React from 'react';
import FormLeftContent from './FormLeftContent';

const FormPage = () => {
    return (
        <div className="h-screen w-11/12 mx-auto flex items-center justify-center">
            <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-between items-center">
                <FormLeftContent />
                <div className="shadow-2xl bg-base-100 flex flex-col justify-center items-center py-20">
                    <h3 className='text-xl font-medium text-black'>SignUp Form</h3>
                    <div className='flex flex-col justify-between items-center mx-10'>
                        <div className="card-body">
                            <div className="form-control border-b-2 mb-4">
                                <input type="text" placeholder="Write First Name" className="input border-none outline-none hover:border-none hover:outline-none" />
                            </div>
                            <div className="form-control border-b-2">
                                <input type="text" placeholder="Write First Name" className="input border-none outline-none hover:border-none hover:outline-none" />
                            </div>
                            <div className="mx-auto mt-5">
                                <a href='/home' className="btn btn-primary text-white flex gap-3 rounded-2xl mt-3">
                                    <span>Next Step</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <span>Already have an account?</span>
                        <a className='text-primary font-semibold underline' href="/login">LOGIN HERE!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPage;
