import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <form className="bg-white  flex flex-col px-7 py-5 shadow-md ring-1 ring-gray-400 rounded-md space-y-1">
        <h1 className="text-2xl font-bold text-center my-3">Login</h1>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />

        <div className="my-3">
          <button className="bg-orange-500 w-full text-white px-3 py-1 rounded-md mt-3">
            Login
          </button>
        </div>
        <p>
          Don't have an account?
          <span className="underline text-blue-400">
            <Link to="/register"> Register</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
