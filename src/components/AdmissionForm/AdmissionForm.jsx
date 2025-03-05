
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-hot-toast";


const AdmissionForm = () => {
  const axios = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async(data) => {
      try {
          const response = await axios.post('/api/submit-admission-data', data);
          if (response.status === 200) {
            toast.success('Application submitted successfully');
            console.log(response.data.admissionData);
            reset();
          } else {
            toast.error('Application not submitted successfully');
          }
          reset();
      } catch (error) {
        toast.error('Error uploading marks', error.message);
      }
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container px-6 py-8 shadow-md border rounded mx-auto max-w-4xl sm:max-w-5xl bg-slate-50">
        <h1 className="text-center font-bold text-orange-500 mb-6 sm:mb-8 text-xl sm:text-2xl">
          School Admission Form
        </h1>
        <form
          onSubmit={handleSubmit((data)=>onSubmit(data))}
          className="grid gap-x-5 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
        >
          <div>
            <label className="mb-1 block font-semibold">Student Name</label>
            <input
              type="text"
              {...register("studentName", { required: "Name is required" })}
              className="focus:ring-blue-400 w-full px-2 py-1.5 focus:outline-0 rounded border-gray-300 ring-1"
            />
            {errors.studentName && (
              <p className="text-sm text-red-500">
                {errors.studentName.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-semibold block mb-1">Date of Birth</label>
            <input
              type="date"
              {...register("dob", {
                required: "Date of birth is required",
              })}
              className="w-full px-2 py-2 border-gray-400 rounded outline-none focus:ring focus:ring-blue-500"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 font-semibold block">Gender</label>
            <select
              {...register("gender", { required: "Please select a gender" })}
              className="px-3 py-1.5 rounded outline-none focus:ring-gray-400 w-full border ring-1 ring-gray-300"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
          <div>
            <label className="font-semibold mb-1 block">
              Class Applying For
            </label>
            <input
              type="text"
              {...register("className", { required: "Class is required" })}
              className="w-full ring-1 px-3 py-2 rounded border-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
            />
            {errors.class && (
              <p className="text-sm text-red-500">{errors.class.message}</p>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Previous School</label>
            <input
              type="text"
              {...register("prevSchool")}
              className="ring-1 px-2 py-2 border-gray-300 w-full rounded focus:ring focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Guardian Name</label>
            <input
              type="text"
              {...register("guardianName", {
                required: "Guardian name is required",
              })}
              className="w-full focus:outline-none px-3 py-2 border-gray-400 ring-1 focus:ring focus:ring-blue-400 rounded"
            />
            {errors.guardianName && (
              <p className="text-red-500 text-sm">
                {errors.guardianName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Guardian Contact</label>
            <input
              type="text"
              {...register("guardianContact", {
                required: "Guardian contact is required",
              })}
              className="ring-1 rounded focus:ring px-3 border-gray-300 w-full py-1.5 focus:outline-none focus:ring-blue-400"
            />
            {errors.guardianContact && (
              <p className="text-red-500 text-sm">
                {errors.guardianContact.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block font-semibold">Guardian Email</label>
            <input
              type="email"
              {...register("guardianEmail", { required: "Email is required" })}
              className="focus:outline-none focus:ring-blue-500 px-2 py-1.5 border-gray-300 ring-1 w-full rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="font-semibold mb-1 block">Address</label>
            <textarea
              {...register("address")}
              className="rounded px-3 py-2 border ring-1 border-gray-400 w-full focus:ring-blue-400 outline-none"
              rows="3"
            ></textarea>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("agreeTerms", {
                  required: "You must agree to the terms",
                })}
                className="mr-2"
              />
              I agree to the terms and conditions
            </label>
            {errors.agreeTerms && (
              <p className="text-sm text-red-500">
                {errors.agreeTerms.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded w-full hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
