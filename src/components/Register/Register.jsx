import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const axios = useAxiosPublic();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);  // Start loading when the submit action starts.

      const { email, password, name, role } = data;
  
      // Create user in Firebase and wait for the response
      const user = await createUser(email, password);
      console.log(user)
  
      if (!user || !user.user.uid) {
        toast.error('User creation failed in Firebase!');
        setLoading(false); // End loading if Firebase user creation fails.
        return;
      }
  
      // Send user data, including uid, to backend API
      const userPost = await axios.post('/api/register', { 
        email, 
        password, 
        name, 
        role, 
        uid: user.user.uid 
      });

      if (userPost && userPost.status === 201) {
        toast.success('User created successfully!');
        navigate('/');  // Navigate to home after successful registration
      } else {
        toast.error('User creation failed in the backend!');
      }
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.response) {
        // Handle specific backend error message
        toast.error(error.response?.data?.message || 'User creation unsuccessful!');
      } else {
        // Handle network or unexpected errors
        toast.error('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);  // End loading after all operations are completed
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white flex flex-col p-5 shadow-md ring-1 ring-gray-400 rounded-md space-y-1"
      >
        <h1 className="text-2xl font-bold text-center my-3">Register</h1>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your Name..."
          {...register("name", { required: "Name is required" })}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          {...register("email", { 
            required: "Email is required", 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            } 
          })}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          {...register("password", { required: "Password is required" })}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <div className="text-sm">
          <label htmlFor="role">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="ring-1 ring-gray-400 rounded px-2 py-1 w-full outline-0 focus:ring-2 focus:ring-blue-500 duration-200"
          >
            <option value="student">Login as a student</option>
            <option value="teacher">Login as a teacher</option>
            <option value="admin">Login as an admin</option>
            <option value="parent">Login as a parent</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
        </div>

        <div className="my-3">
          <button
            type="submit"
            className="bg-orange-500 w-full text-white px-3 py-1 rounded-md mt-3"
            disabled={loading}  // Disable button when loading
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>

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
