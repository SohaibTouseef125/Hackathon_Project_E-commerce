import Link from "next/link";

export default function LoginForm() {
  return (
   <>
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Log In</h2>
      <form>
        <label className="block text-sm text-gray-600 mb-2" htmlFor="username">
          Username or email address
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username or email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <label className="block text-sm text-gray-600 mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
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
        <Link href='/checkout'> <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-200">
          Log In
        </button></Link>
        
      </form>
    </div>
   </>
  );
}
