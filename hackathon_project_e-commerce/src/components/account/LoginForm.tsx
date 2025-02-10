"use client"

import useMyContext from "@/context/MyContext";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";



export default function LoginForm() {
  const {userRegister} = useMyContext()
  // console.log("userLogin",userLogin);
   const [userLogin, setUserLogin] = useState({
      email: "",
      password: "",
    });
    const route = useRouter();
  const handlerLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
      
    };
    const handlerLoginFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      
      try {
        const result = await client.create({
          _type: "userLogin",
          name: userRegister.name,
          email: userLogin.email,
          password : userLogin.password
        });
        // if (!result) {
        //   throw new Error("User Register Failed");
        // }
        console.log("userLogin", userLogin);
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome ${result.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
        route.push(`/`);
      } catch (error) {
        console.log("User Register Failed", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "User Login Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };
  
  
  return (
   <>
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Log In</h2>
      <form onSubmit={handlerLoginFormSubmit}>
        <label className="block text-sm text-gray-600 mb-2" htmlFor="username">
          Username or email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userLogin.email}
          onChange={handlerLoginForm}
          placeholder="Enter your username or email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <label className="block text-sm text-gray-600 mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={userLogin.password}
          onChange={handlerLoginForm}
          placeholder="Enter your password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Lost your password?
          </a>
        </div>
         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-200">
          Log In
        </button>
        
      </form>
    </div>
   </>
  );
}
