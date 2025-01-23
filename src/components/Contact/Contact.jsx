import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: 'LearnXpert',
      message: msg,
    };

    const serviceID = 'service_5g7mx8l';
    const templateID = 'template_ur5ryjz';
    const publicKey = 'x9kBKTuHeY9OHofZs';

    // Set loading to true before sending
    setIsLoading(true);

    // Send email using emailjs.send
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          toast.success('Successfully sent the message!');
          setName('');
          setEmail('');
          setSubject('');
          setMsg('');
        },
        (error) => {
          toast.error('Failed to send the message. Please try again later.');
          console.error('Error sending email:', error.text);
        }
      )
      .finally(() => {
        // Set loading to false once the email is sent or failed
        setIsLoading(false);
      });
  };

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
          We’d love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out. We're here to help.
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
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg"
          >
            <label className="flex flex-col">
              <span className="mb-1 text-gray-700">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                type="text"
                className="ring-1 ring-gray-400 px-5 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Your Name"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-gray-700">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email"
                type="email"
                className="ring-1 ring-gray-400 px-5 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Your Email"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-gray-700">Subject</span>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
                type="text"
                className="ring-1 ring-gray-400 px-5 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Subject"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-gray-700">Message</span>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                name="message"
                className="ring-1 ring-gray-400 px-5 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                placeholder="Your Message"
                rows="2"
              ></textarea>
            </label>
            <input
              value={isLoading ? "Sending..." : "Send"}
              type="submit"
              disabled={isLoading} // Disable the button when loading
              className={`bg-orange-400 w-1/3 text-white px-5 py-2 rounded-md ${
                isLoading ? "bg-opacity-60" : "hover:bg-orange-600"
              } transition duration-300 cursor-pointer`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
