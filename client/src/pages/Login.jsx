import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import {useSelector} from "react-redux";

const Login = () => {
    const {user} = useSelector((state)=>state.auth); // This should be replaced with actual user state
    const { register, 
        handleSubmit, 
        formState: { errors } } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        console.log("submit")
    };
     
    

    useEffect(() => {
        user && navigate("/dashboard")
    }, [user]);

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-[#f3f4f5]'>
            <div className='flex flex-col items-center justify-center w-full md:w-auto gap-10'>
                {/* Left Side */}
                <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
                    <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600 whitespace-nowrap'>
                        Manage all your tasks in one place
                    </span>

                    <p className='text-2xl md:text-4xl 2xl:text-5xl font-black text-center text-red-500'>
                        <span className='block'>Real-time</span>
                        <span className='block'>Task Manager</span>
                    </p>
                    <div className='cell'> 
                    <div className='circle-rotate-in-up-left'></div>
                    </div>
                </div>
                {/* Right Side */}
                <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(submitHandler)}
                className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
                >
                    <div className=''>
                        <p className='text-red-500 text-3x1 font-bold text-center'>Welcome back!</p>
                        <p className='text-center text-base text-gray-700'>
                            Keep all your credentail safe.</p>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <Textbox placeholder="email@example.com"
                        type="email"
                        name="email"
                        label="Email Address"
                        className="w-full rounded-full"
                        register={register("email",{
                        required: "Email Address is required !",
                        })} 
                    error={errors.email ? errors.email.message : ""}
                    />
                    <Textbox placeholder="your password"
                        type="password"
                        name="password"
                        label="Password"
                        className="w-full rounded-full"
                        register={register("email",{
                        required: "Password is required !",
                        })} 
                    error={errors.password ? errors.password.message : ""}
                    />
                    <span className='text-sm text-gray-500 hover:text-red-600 hover:underline cursor-pointer'>
                        Forget Password ?
                    </span>

                    <Button
                    type='submit'
                    label='submit'
                    className='w-full h-10 bg-red-600 text-white rounded-full'
                    />
                    </div>
                </form>

                </div>
            </div>
        </div>
    );
}

export default Login;