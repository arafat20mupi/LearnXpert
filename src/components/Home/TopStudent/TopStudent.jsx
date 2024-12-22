import React from "react";

const TopStudent = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      description:
        "A dedicated and hardworking student with a passion for mathematics and science.",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      description:
        "An exceptional student excelling in arts and literature with a keen eye for detail.",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robertjohnson@example.com",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
      description:
        "An innovative thinker who thrives in solving complex problems and exploring technology.",
    },
  ];

  return (
    <div className="my-20 bg-scroll bg-cover" id="topStudent">
      <div className="text-center mb-12 relative">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 mb-2">
          <div className="group relative inline-block">
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-orange-500"></span>
            <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-orange-500"></span>
          </div>
          <span className="ml-3">Top Students</span>
        </h1>

        <h2 className="text-xl text-gray-600 font-medium">
          Meet the high achievers who are leading the way in their studies
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="px-10 md:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="flex flex-col items-center justify-center border shadow-lg px-5 py-8 rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-center mt-2 text-gray-700">
                {user.description}
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopStudent;
