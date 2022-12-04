import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormProvider';
import FormPageOne from './FormPageOne';
import FormPageTwo from './FormPageTwo';
import FormPageThree from './FormPageThree';

// import FormPageOne from './FormPageOne';

const Form = () => {
    const { personName } = useContext(FormContext);
    const [page, setPage] = useState(1);
    console.log(page);


    return (
        <div className='h-screen grid items-center'>
            <div className="grid max-w-6xl grid-cols-1 mx-auto md:grid-cols-2 lg:gap-20 items-center">
                <div>
                    <img src="logo.png" alt="" />
                    <img src="formImg.png" alt="" />
                </div>
                <div className="flex flex-col lg:gap-20 gap-10 p-6 lg:py-28 md:py-0 md:px-6 shadow-2xl">
                    <h1 className="text-xl font-medium text-center">SignUp Form</h1>
                    {
                        page === 1 ? <FormPageOne /> : page === 2 ? <FormPageTwo /> : <FormPageThree />
                    }
                    <div className='flex justify-center gap-10'>

                        {
                            page > 1 &&
                            <>
                                <button type="button" className="btn btn-link" onClick={() => {
                                    const prevPage = page - 1;
                                    setPage(prevPage)
                                }}><span>back</span></button>
                            </>

                        }

                        {page === 3 && <button type="button" className="btn btn-primary px-10 text-white"> Sign Up</button>}

                        {
                            page < 3 &&
                            <button type="button" className="btn btn-primary text-white" onClick={() => {
                                const nextPage = page + 1;
                                setPage(nextPage)
                            }} ><span>Next Step</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;

