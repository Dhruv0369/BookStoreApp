import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import books from '../../public/books.png'
import Login from './Login'


function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Perform any additional actions after submission
    };
    return (
        <>
            <div>
                <div id="my_modal_3">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        {/* Email */}
                        <div className="h-screen flex-1 flex-col justify-center items-center px-6 py-6 pb-12 lg:px-8 ">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <div className='pb-6'>
                                    <img
                                        alt="Your Company"
                                        src={books}
                                        // src="https://img.icons8.com/?size=100&id=48923&format=png&color=000000 "

                                        className="mx-auto h-16 w-auto"
                                    />
                                </div>
                                <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:bg-slate-900 dark:text-white pb-2">
                                    Sign Up to your account
                                </h2>
                            </div>

                            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6  text-gray-900 dark:bg-slate-900 dark:text-white">
                                                Name
                                            </label>

                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="Name"
                                                name="Name"
                                                type="text"
                                                required
                                                placeholder='Enter Your Good Name'
                                                autoComplete="current-password"
                                                className="p-2 block w-full rounded-md border-0 py-1.5 dark:bg-slate-900 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                                                {...register("name", { required: true })}
                                            />
                                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:bg-slate-900 dark:text-white">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder='Enter Your Email'
                                                autoComplete="email"
                                                className=" p-2 block w-full rounded-md border-0 py-1.5 dark:bg-slate-900 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                                                {...register("email", { required: true })}
                                            />
                                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6  text-gray-900 dark:bg-slate-900 dark:text-white">
                                                Password
                                            </label>

                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                placeholder='Enter Your password'
                                                autoComplete="current-password"
                                                className="p-2 block w-full rounded-md border-0 py-1.5 dark:bg-slate-900 dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                                                {...register("password", { required: true })}

                                            />
                                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

                                        </div>
                                    </div>


                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-10 text-center text-sm text-gray-500">
                                    Have account?{" "}
                                    <button className="font-semibold leading-6 text-pink-600 hover:text-pink-500 "
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >
                                        Login
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
