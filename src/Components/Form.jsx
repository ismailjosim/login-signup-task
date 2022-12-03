import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormProvider';
import FormPage from './FormPage';


const Form = () => {
    const { personName } = useContext(FormContext);

    return (
        <div className="h-screen w-11/12 mx-auto flex items-center justify-center">
            <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-between items-center">
                <div>
                    <div>
                        <img src="logo.png" alt="" />
                    </div>
                    <div className='lg:w-full w-11/12 mx-auto'>
                        <img className='w-full' src="formImg.png" alt="" />
                    </div>
                </div>
                <div className="shadow-2xl bg-base-100 flex items-center h-[600px] px-10">
                    <FormPage />

                </div>

            </div>
        </div>
    );
};

export default Form;
