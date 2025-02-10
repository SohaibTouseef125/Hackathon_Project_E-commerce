"use client"
import useMyContext from "@/context/MyContext";


export default function RegisterForm() {
  const {userRegister,handlerForm,handlerFormSubmit} = useMyContext()
  
  return (
   <>
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4" >Register</h2>
      <form onSubmit={handlerFormSubmit}>
        <label className="block text-sm text-gray-600 mb-2" htmlFor="email">
          Name 
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handlerForm}
          value={userRegister.name}
          placeholder="Enter your Name"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <label className="block text-sm text-gray-600 mb-2" htmlFor="email">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userRegister.email}
          onChange={handlerForm}
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <label className="block text-sm text-gray-600 mb-2" htmlFor="email">
          Password
        </label>
        <input
          type="Password"
          id="password"
          name="password"
          onChange={handlerForm}
          value={userRegister.password}
          placeholder="Enter your Password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <p className="text-xs text-gray-600 mb-4">
          A link to set a new password will be sent to your email address.
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-200">
          Register
        </button>
        <p className="text-xs text-gray-600 mt-4">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{' '}
          <a href="#" className="text-blue-600 underline">
            privacy policy
          </a>
          .
        </p>
      </form>
    </div>
   </>
  );
}
