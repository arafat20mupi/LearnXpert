import React from "react";

const Contact = () => {
  return (
    <div className="my-10">
      <div>
        <h1 className="text-2xl left-5 md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 relative my-4">
          <div className="group relative inline-block">
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-orange-500"></span>
            <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-orange-500"></span>
          </div>
          <span className="ml-4">Contact Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-2 md:w-2/3">
          We’d love to hear from you! Whether you have a question, feedback, or
          need assistance, feel free to reach out. We're here to help.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between my-20 px-4">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="map.png"
            className="w-full h-auto max-w-md"
            alt="Map location"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-md ring-1 ring-gray-200 rounded-md">
          <form
            action=""
            className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg"
          >
            <label className="flex flex-col">
              <span className="mb-1 text-gray-700">Name</span>
              <input
                type="text"
                className="ring-1 ring-gray-400 px-5 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Your Name"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-gray-700">Email</span>
              <input
                type="email"
                className="ring-1 ring-gray-400 px-5 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Your Email"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-gray-700">Subject</span>
              <input
                type="text"
                className="ring-1 ring-gray-400 px-5 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Subject"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-gray-700">Message</span>
              <textarea
                className="ring-1 ring-gray-400 px-5 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Your Message"
                rows="2"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-orange-400 w-1/3 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
