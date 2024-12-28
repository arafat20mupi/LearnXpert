import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { googleSignIn, createUser } = useContext(AuthContext)

  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    const { email, password, } = data;

    createUser(email, password)
      .then(() => {
        console.log("User created successfully!");
        toast.success('User created successfully!!');
        navigate('/');
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        toast.error('User creation unsuccessful!!');
      });
  }
  const handleGoogleSubmit = async () => {
    googleSignIn()
      .then(() => {
        console.log("User created successfully!");
        toast.success('User created successfully!!');
        navigate('/');
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        toast.error('User creation unsuccessful!!');
      });
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white flex flex-col p-5 shadow-md ring-1 ring-gray-400 rounded-md space-y-1">
        <h1 className="text-2xl font-bold text-center my-3">Register</h1>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="Enter your Name..."
          {...register("name")}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
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
        <div className="text-sm">
          <label htmlFor="role">Role</label>
          <select {...register("role")} className="ring-1 ring-gray-400 rounded px-2 py-1 w-full outline-0 focus:ring-2 focus:ring-blue-500 duration-200">
            <option value="student">Login as a student</option>
            <option value="teacher">Login as a teacher</option>
            <option value="admin">Login as a admin</option>
            <option value="parent">Login as a parent</option>
          </select>
        </div>
        <div className="my-3">
          <button type="submit" className="bg-orange-500 w-full text-white px-3 py-1 rounded-md mt-3">
            Register
          </button>
        </div>
        <button onClick={handleGoogleSubmit} className="flex items-center justify-center bg-white ring-1 ring-gray-400 w-full text-gray-700 px-3 py-1 rounded-md mt-3">
          <FcGoogle className="mr-2" /> Register with Google
        </button>
        <p>
          Already have an account?
          <span className="underline text-blue-400">
            <Link to="/login"> Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
