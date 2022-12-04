import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormProvider';


const FormPageTwo = () => {
    const { phone, setPhone, email, setEmail } = useContext(FormContext);




    return (
        <form className='flex flex-col gap-5'>
            <div className="block">
                <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text" placeholder="xxxxxxxxxx" className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0" />
            </div>
            <div className="block">
                <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Write Email Address" className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0" />
            </div>
        </form>
    );
};

export default FormPageTwo;
