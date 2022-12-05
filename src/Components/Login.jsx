import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../contexts/FormProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const { error, setError } = useContext(FormContext);



    const handleLogin = () => {

        if (password.length < 8) {
            setError('Password Must Be 8 character');

        } else {
            setError('');
            const user = {
                email: email,
                password: password
            }
            console.log(user);

            fetch('https://test.nexisltd.com/login', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(data);
                        // toast.success('User created SuccessFully');
                    }
                })


        }

    }




    return (
        <div className='h-screen grid items-center'>
            <div className="grid max-w-6xl grid-cols-1 mx-auto md:grid-cols-2 lg:gap-20 items-center">
                <div>
                    <img src="logo.png" alt="" />
                    <img src="formImg.png" alt="" />
                </div>
                <div className="flex flex-col lg:gap-10 gap-10 p-6 lg:py-16 md:py-0 md:px-6 shadow-2xl">
                    <h1 className="text-xl font-medium text-center mb-10">SignUp Form</h1>
                    <form className='flex flex-col gap-5'>
                        <div className="block">
                            <input
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                                placeholder="Write Email Address"
                                className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0"
                            />
                        </div>
                        <div className="block">
                            <input
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password"
                                placeholder="Write Password"
                                className="w-full py-2 px-5 input input-info border-b-2 border-0 rounded-none hover:outline-0 focus:outline-0"
                            />
                        </div>
                        <div className="ml-5">
                            {error && <h3 className='text-error font-medium list-item list-disc'>{error}</h3>}
                        </div>
                        <div className='flex justify-center my-10'>
                            <button onClick={handleLogin} type="button" className="btn btn-primary px-10 text-white">Log In</button>
                        </div>
                    </form>

                    <div className='text-end'>
                        <span className='text-sm font-[#7E7E7E]'>Don't have an account?</span>
                        <Link className="link ml-2 font-primary" to="/signup">SignUp HERE!</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
