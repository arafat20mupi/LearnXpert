import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function Faq() {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "What is your return policy?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  // Initialize AOS
  AOS.init();

  return (
    <div className="mx-auto w-full max-w-full px-4 py-8 bg-white text-black">
      <div className="text-center mb-12 relative">
        <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 mb-2">
          <div className="group relative inline-block">
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-orange-500"></span>
            <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-orange-500"></span>
          </div>
          <span className="ml-3">Frequently Asked Questions</span>
        </h1>

        <h2 className="text-lg md:text-xl text-gray-600 font-medium">
          Here are some common queries answered for you.
        </h2>
      </div>
      <div className="mx-auto w-full max-w-[900px] rounded-lg">
        {dataArr.map((PerAccordion, idx) => (
          <div
            key={idx}
            className="my-6 rounded-lg border border-gray-300 bg-white p-6 shadow-md"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between font-semibold text-gray-800 outline-none"
            >
              <span className="text-sm md:text-base">{PerAccordion.title}</span>
              <span className="text-xl md:text-2xl">
                {isOpen === idx ? <FaTimes /> : <FaPlus />}
              </span>
            </button>
            <div
              className={`overflow-hidden text-gray-700 transition-all duration-300 ease-in-out ${
                isOpen === idx
                  ? "max-h-screen pb-2 pt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="overflow-hidden text-sm md:text-base">
                {PerAccordion.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-10 px-4 py-6 bg-orange-500 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
          Why Choose Our School?
        </h3>
        <p className="text-white text-sm md:text-base mb-4">
          Our school is dedicated to providing a holistic learning environment
          that nurtures both academic excellence and personal growth. We believe
          in fostering a strong sense of community and preparing our students
          for success in the ever-evolving world.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-white text-sm md:text-base">
          <li>Experienced and caring faculty</li>
          <li>State-of-the-art facilities</li>
          <li>Inclusive and supportive learning environment</li>
          <li>Variety of extracurricular activities</li>
          <li>Focus on personal development</li>
        </ul>
      </div>
    </div>
  );
}
