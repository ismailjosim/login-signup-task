import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormProvider';


const FormPageTwo = () => {
    const { phone, setPhone, email, setEmail, countryCode, setCountryCode } = useContext(FormContext);


    return (
        <form className='flex flex-col gap-5'>
            <div className="grid grid-cols-4 gap-5">
                <input
                    required
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    type="number" placeholder="+880" className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0 col-span-1" />
                <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number" placeholder="xxxxxxxxxx" className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0 col-span-3" />
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
