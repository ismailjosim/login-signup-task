import React from 'react';

const FormPage = () => {
    return (
        <div className='flex flex-col justify-between items-center'>
            <div className="card-body">
                <div className="form-control border-b-2 mb-4">
                    <input type="text" placeholder="Write First Name" className="input border-none outline-none hover:border-none hover:outline-none" />
                </div>
                <div className="form-control border-b-2">
                    <input type="text" placeholder="Write First Name" className="input border-none outline-none hover:border-none hover:outline-none" />
                </div>
                <div className="mx-auto">
                    <button className="btn btn-primary text-white flex gap-3 rounded-2xl mt-3">
                        <span>Next Step</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className=''>
                <span>Already have an account?</span>
                <a href="#">LOGIN HERE!</a>
            </div>
        </div>
    );
};

export default FormPage;
