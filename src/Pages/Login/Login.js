import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const { userSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';




    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');
        userSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            });

    }
    const handleGoogleLogin = () => {

    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-info text-center font-bold'>Login</h2>
                {/* -----------------Start Form------------------ */}
                <form onSubmit={handleSubmit(handleLogin)}>
                    {/* --------------email---------------------------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Email</span></label>
                        <input
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            type="email" className="input input-bordered w-full max-w-xs" />

                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                    </div>
                    {/* --------------email---------------------------------- */}




                    {/* --------------password---------------------------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text font-bold">Password</span></label>
                        <input
                            {...register("password", {
                                required: "Password Required",
                                minLength: { value: 6, message: 'Password must be 6 characters or more.!!!' }
                            })}
                            type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                        {/* forget password */}
                        <label className="label"><span className="label-text mb-5 text-primary"><Link to={'/resetPassword'}>Forget Password</Link></span></label>
                    </div>
                    {/* --------------password---------------------------------- */}


                    {/* --------------Login Btn---------------------------------- */}
                    <input className='btn btn-info w-full' type="submit" value={'Login'} />
                </form>

                {/* error display------------------------- */}
                <div>
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                </div>
                {/* -------------End Form-------------- */}


                <p className='font-semibold my-5'>New to Doctors Portal? <Link to={'/signUp'} className='text-red-800'>Create new account</Link></p>
                <div className="divider">OR</div>
                {/* -------------Google Login-------------- */}
                <button onClick={handleGoogleLogin} className='btn btn-outline btn-info w-full my-4'>CONTINUE WITH GOOGLE</button>
                {/* -------------Google Login-------------- */}
            </div>
        </div>
    );
};

export default Login;