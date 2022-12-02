import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormProvider';


const Form = () => {
    const { personName } = useContext(FormContext);

    return (
        <div>
            <h3>Welcome</h3>
        </div>
    );
};

export default Form;
