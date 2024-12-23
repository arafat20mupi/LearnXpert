
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <form className="flex flex-col p-5 shadow-md ring-1 ring-gray-400 rounded-md space-y-1">
        <h1 className="text-2xl font-bold text-center my-3">Register</h1>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          className="ring-1 ring-gray-400 rounded px-2 py-1"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="ring-1 ring-gray-400 rounded px-2 py-1"
        />

        <div className="my-2">
          <select className="ring-1 ring-gray-400 rounded px-2 py-1 w-full my-2">
            <option value="">Login as a student</option>
            <option value="">Login as a teacher</option>
            <option value="">Login as a admin</option>
            <option value="">Login as a parent</option>
          </select>
        </div>

        <div className="my-3">
          <button className="bg-orange-500 w-full text-white px-3 py-1 rounded-md mt-3">
            Login
          </button>
        </div>

        <p>
          Already have an account??
          <span className="underline text-blue-400">
            <Link to="/login"> Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
