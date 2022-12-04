import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormProvider';


const FormPageThree = () => {
    const { password, setPassword } = useContext(FormContext);

    return (
        <form className='flex flex-col gap-5'>
            <div className="block">
                <input
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Write Password"
                    className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0"
                />
            </div>
            <div className="block">
            </div>

        </form>
    );
};

export default FormPageThree;
