import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormProvider';

const FormPageOne = () => {
    const { firstName, setFirstName, lastName, setLastName } = useContext(FormContext);
    return (
        <form className='flex flex-col gap-5'>
            <div className="block">
                <input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="Write First Name"
                    className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0" />
            </div>
            <div className="block">
                <input
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Write Last Name"
                    className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0" />
            </div>
        </form>
    );
};

export default FormPageOne;
