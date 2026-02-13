import { Link, useSearchParams } from "react-router-dom";
import LoginLogo from "../assets/LoginLogo.png";
import { useState } from "react";

function LoginPage(){
    const [LogForm,setLogForm]=useState({
        email:"",
        password:""
    });

    function handleChange(e){
        const{name,value}=e.target;
        setLogForm({...LogForm,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();

        const usersaved=JSON.parse(localStorage.getItem("user"));
        if(usersaved && usersaved.email === LogForm.email && usersaved.password === LogForm.password){
            alert("Login successful");
            
        }
        else{
            alert("Invalid Email or Password");
        }
    }

    return(
        <div className="w-80 rounded-md shadow-lg bg-white p-8">

            <div className="flex justify-center mb-3">
                <h2 className="text-3xl text-black font-sans text-center font-medium">Welcome</h2>
            </div>

            <div className="w-full h-20 flex justify-center  mb-3">
                <img src={LoginLogo} alt="Logo" />
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>

                <input type="email" name="email" placeholder="Email" required onChange={handleChange}
                className="w-full  p-3 border-b-2 outline-none border-gray-400 focus:border-blue-300
                 placeholder:text-gray-300 font-sans overflow-hidden"/>

                <input type="password" name="password" placeholder="Password" required onChange={handleChange}
                className="w-full  p-3 border-b-2 outline-none border-gray-400 focus:border-blue-300
                 placeholder:text-gray-300 font-sans overflow-hidden" />

                <div>
                    <button className="w-full p-3 my-4 bg-linear-to-r from-blue-400 via-indigo-500 to-pink-600 rounded-full text-white">
                        Login
                    </button>
                </div>

                <div className="flex justify-center">
                    <p className="text-sm text-gray-400 ">Don't have on account?
                        <Link to="/signup" className='text-blue-500 hover:underline'>Signup</Link>
                    </p>
                </div>
            </form>


        </div>
    );
}
export default LoginPage