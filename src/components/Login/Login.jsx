import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, googleSignIn, user } = useContext(AuthContext);
  const navigate = useNavigate()
console.log(user)
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
        const result = await signIn(email, password);
        console.log(result.user);
        toast.success('Login Successful!!');
        navigate('/');
    } catch (error) {
        console.error("Error logging in:", error);
        toast.error('Login Unsuccessful!!');
    }
  };

  const handleGoogleSubmit = async () => {
    try {await googleSignIn();
        toast.success('Login Successful!!');
        navigate('/');
    } catch (error) {
        console.error("Error with Google Sign In:", error);
        toast.error('Login Unsuccessful!!');
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white flex flex-col px-7 py-5 shadow-md ring-1 ring-gray-400 rounded-md space-y-1">
        <h1 className="text-2xl font-bold text-center my-3">Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          {...register("email")}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          {...register("password")}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
        <div className="my-6">
          <button type="submit" className="bg-orange-500 w-full text-white px-3 py-1 rounded-md mt-3">
            Login
          </button>
        </div>
        <button onClick={handleGoogleSubmit} className="flex items-center justify-center bg-white ring-1  ring-gray-400 w-full text-gray-700 px-3 py-1 rounded-md mt-3">
          <FcGoogle className="mr-2" /> Login with Google
        </button>
        <p>
          Don&apos;t have an account?
          <span className="underline text-blue-400">
            <Link to="/register"> Register</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
