const StudentProfile = () => {
    const photo=
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWBQmFSOxkbxNfQV0oQXHQ95vVcC-jM4luw&s"
  const student = [
    {
      name: "Abdullah Al Nirob",
      class: "10",
      rollNo: "08",
      address: "Nasaratpur, adamdighi, Bogura",
    },
  ];

  const deucard = [
    {
      month: "January",
      bdt: "200",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="flex justify-center items-center">
        <div className="space-y-8">
          {student.map((student, key) => (
            <div
              key={key}
              className="max-w-md p-6 mx-auto bg-white shadow-lg rounded-lg"
            >
              <div className="flex flex-col items-center mb-6">
                <img
                  className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
                  src={photo}
                />
                <h2 className="text-2xl font-semibold text-gray-800">
                  {student.name}
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Name:</span>
                  <span className="text-gray-600">{student.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Class:</span>
                  <span className="text-gray-600">{student.class}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Roll No:</span>
                  <span className="text-gray-600">{student.rollNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Address:</span>
                  <span className="text-gray-600">{student.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="my-5">
          <h1 className="text-center text-xl">Your Outstanding</h1>
        </div>
      <div className="pt-0 pb-10 flex px-0 justify-center md:justify-normal md:px-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deucard.map((info, key) => (
            <div
              key={key}
              className="px-8 py-5 rounded-md bg-white shadow-md ring-1 ring-gray-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Month: {info.month}
              </h2>
              <h3 className="text-lg text-gray-600">{info.bdt} BDT</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
