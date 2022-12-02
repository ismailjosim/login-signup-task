import React, { createContext } from 'react';


export const FormContext = createContext();

const FormProvider = ({ children }) => {
    const personName = {
        name: "ismail",
        age: 25
    }


    const formInfo = {
        personName
    }


    return (
        <FormContext.Provider value={formInfo}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
