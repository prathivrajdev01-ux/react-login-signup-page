import { useState } from "react";

function LogSign(){
    const [isLog,setIsLogPage]=useState(true);

    const [loginForm,setLoginForm]=useState({
        email:"",
        password:""
    });

    const [signupForm,setSingupForm]=useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    });

    function handleChange(e){
        const {name,value}=e.target;
        if(isLog){
            setLoginForm({...loginForm,[name]:value});
        }
        else{
            setSingupForm({...signupForm,[name]:value});
        }
    };

    function handleSubmit(e){
        e.preventDefault();
        if(isLog){
            const saveduser=JSON.parse(localStorage.getItem("user"));
            if(saveduser && saveduser.email === loginForm.email &&
                 saveduser.password === loginForm.password){
                    alert("Login successful");
                }
            else{
                alert("Invalid email or password");
                }
        }
        else{
            if(signupForm.password !== signupForm.confirmpassword){
                alert("password is mismatch");
                return;
            }
            localStorage.setItem("user",JSON.stringify({
                name:signupForm.name,
                email:signupForm.email,
                password:signupForm.password
            }))
            alert("Signup successful");
            setIsLogPage(true);
        }
    };

    return(
        <div className="w-120 rounded-md shadow-lg p-8  bg-white ">

        <div className="flex justify-center mb-4">
            <h2 className="text-3xl text-center font-semibold">{isLog ? "Login":"Singup"}</h2>
        </div>

        <div className="relative flex mb-6 p-4 border border-gray-300 rounded-full overflow-hidden ">
        <button onClick={()=>setIsLogPage(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLog?"text-white":"text-black"}`} >
            Login
        </button>
        <button onClick={()=>setIsLogPage(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLog?"text-white":"text-black"}`}>
            Signup
        </button>
        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-linear-to-r from-blue-300 via-blue-400 to-blue-500 ${isLog? "left-0":"left-1/2"}`}></div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} >

            {!isLog && <input type="text" name="name" placeholder="Name"required onChange={handleChange}
             className="w-full p-3 border-b-2 border-gray-200 outline-none
              focus:border-blue-400 placeholder-gray-400"/> }

            <input type="email" name="email" placeholder="Email" required onChange={handleChange}
             className="w-full p-3 border-b-2 border-gray-200 outline-none
              focus:border-blue-400 placeholder-gray-400"/>

            <input type="password" name="password" placeholder="Password" required onChange={handleChange}
             className="w-full p-3 border-b-2 border-gray-200 outline-none
              focus:border-blue-400 placeholder-gray-400"/>

            {!isLog && <input type="password" name="confirmpassword" placeholder="Confirm password" required onChange={handleChange}
            className="w-full p-3 border-b-2 border-gray-200 outline-none
             focus:border-blue-400 placeholder-gray-400"/>}


            {isLog && (
                <div ><p className="text-blue-600 text-sm">Forgot password ?</p>
                </div> )
            }

        <div>
            <button className="w-full p-4 bg-linear-to-r from-blue-300 via-blue-400 to-blue-500 rounded-full text-white text-lg font-medium">{isLog? "Login":"Signup"}</button>
        </div>

         <div className="flex justify-center ">
                <p className="text-gray-400">
                {isLog?"New account ?":"Already have?"}
                <a href="#"onClick={()=>setIsLogPage(!isLog)} className="text-blue-500 hover:underline">
                    {isLog?"Signup now":"Login now"}
                </a>
                </p>
        </div>
            </form>
        </div>
    );
}
export default LogSign