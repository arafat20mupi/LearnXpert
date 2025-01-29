const UpdateHeadline = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center mt-2">
      <form action="" className="shadow-md shadow-gray-400 ring-gray-300 ring-1 px-3 md:px-20 py-14 rounded-md space-y-4">
              <h1 className="md:text-3xl font-bold text-center">Update Headline</h1>
              <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
                  <input
                      className="px-3 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-600 duration-300 outline-0"
                      type="text" name="" placeholder="Enter Headline.." />
                  <button className="px-3 w-full md:w-[unset] py-2 rounded-md bg-orange-500 hover:bg-orange-600 duration-200 text-white">Add Headline</button>
              </div>
              <h1 className="md:text-xl">Current Headline : {"Welcome to our website"}</h1>
      </form>
    </div>
  );
};

export default UpdateHeadline;
