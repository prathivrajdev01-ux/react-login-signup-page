import { Link } from 'react-router-dom';
import LoginLogo from '../assets/LoginLogo.png'
import { useState } from 'react';

function SignupPage(){

    const [SigForm,setSinForm]=useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    });

    function handleChange(e){
        const {name,value}=e.target;
        setSinForm({...SigForm,[name]:value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(SigForm.password !== SigForm.confirmpassword){
            alert("Password mismatch");
            return;
        }
        localStorage.setItem("user",JSON.stringify({
            name:SigForm.name,
            email:SigForm.email,
            password:SigForm.password
        }));
        alert("Sigup successfull");

    }

    return(
        <div className="w-80 p-8 bg-white rounded-md shadow-lg">
            <div className="flex justify-center mb-3">
                <h2 className='text-3xl text-black font-sans font-medium text-center'>Signup</h2>
            </div>
            <div className="w-full h-20 flex justify-center mb-3">
                <img src={LoginLogo} alt="Logo" />
            </div>
            <form className='space-y-4' onSubmit={handleSubmit}>

                <input type="text" name='name' placeholder='Name' required onChange={handleChange}
                className=" w-full p-3 border-b-2 outline-none border-gray-400 focus:border-blue-300
                 placeholder:text-gray-300 font-sans overflow-hidden " />

                <input type="email" name='email' placeholder='Email' required onChange={handleChange}
                className=" w-full p-3 border-b-2 outline-none border-gray-400 focus:border-blue-300
                 placeholder:text-gray-300 font-sans overflow-hidden " />

                <input type="password" name='password' placeholder='Password' required onChange={handleChange}
                className=" w-full p-3 border-b-2 outline-none border-gray-400 focus:border-blue-300
                 placeholder:text-gray-300 font-sans overflow-hidden " />

                <input type="password" name='confirmpassword' placeholder='Confirmpassword' required onChange={handleChange}
                className=" w-full p-3 border-b-2 outline-none border-gray-400 focus:border-blue-300
                 placeholder:text-gray-300 font-sans overflow-hidden " />
               
                <div >
                <button className='w-full rounded-full bg-linear-to-r
                 from-blue-400 via-indigo-500 to-pink-600 text-white 
                 my-4 p-3'>Signup</button>
                </div>
            </form>
            <div className='flex justify-center'>
                <p className='text-sm text-gray-400 '>Already have account ?
                <Link to="/login" className='text-blue-500 hover:underline'>Login</Link>
                </p>
            </div>
        </div>
    ); 
}
export default SignupPage