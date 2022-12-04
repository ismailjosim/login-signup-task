import React from 'react';


const FormPageTwo = () => {
    return (
        <form className='flex flex-col gap-5'>
            <div className="block">
                <input type="text" placeholder="xxxxxxxxxx" className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0" />
            </div>
            <div className="block">
                <input type="text" placeholder="Write Email Address" className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0" />
            </div>
        </form>
    );
};

export default FormPageTwo;
