import React, { createContext, useState } from 'react';


export const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const formInfo = {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phone,
        setPhone,
        password,
        setPassword,
        email,
        setEmail
    }


    return (
        <FormContext.Provider value={formInfo}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
