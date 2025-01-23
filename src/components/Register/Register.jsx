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
  const [isStudent, setIsStudent] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);  // Start loading when the submit action starts.

      const { email, password, name, role , phone , address , className } = data;

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
        uid: user.user.uid,
        phone,
        address,
        className,
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
    <div className="flex mt-16 flex-col items-center justify-center h-[100vh]">
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

        <label htmlFor="phone">Phone Number</label>
        <input
          type="phone"
          placeholder="Enter your phone..."
          {...register("phone", {
            required: "phone is required",
          })}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

        <label htmlFor="address">Your Current  Address</label>
        <input
          type="address"
          placeholder="Enter your address..."
          {...register("address", {
            required: "address is required",
          })}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          {...register("password", { required: "Password is required" })}
          className="ring-1 ring-gray-400 rounded px-2 py-1 outline-0 focus:ring-2 focus:ring-blue-500 duration-200 text-sm"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <label htmlFor="role">Your Role</label>
        <select
          {...register("role", { required: "Role is required" })}
          className="ring-1 ring-gray-400 rounded px-2 py-1 w-full outline-0 focus:ring-2 focus:ring-blue-500 duration-200"
          onChange={(e) => {
            const selectedRole = e.target.value;
            setIsStudent(selectedRole === "student"); 
          }}
        >
          <option value="student">Login as a student</option>
          <option value="teacher">Login as a teacher</option>
          <option value="admin">Login as an admin</option>
          <option value="parent">Login as a parent</option>
        </select>
        {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}


        {
          isStudent && <div className="text-sm">
            <label htmlFor="className">Your Class Name</label>
            <select
              {...register("className", { required: "class is required" })}
              className="ring-1 ring-gray-400 rounded px-2 py-1 w-full outline-0 focus:ring-2 focus:ring-blue-500 duration-200"
            >
              <option> Select Your Class</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>
            {errors.class && <p className="text-red-500 text-sm">{errors.class.message}</p>}
          </div>
        }



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
