import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">About LearnXpert</h3>
          <p>
            LearnXpert is dedicated to providing quality education to students
            through a variety of programs and resources. We aim to foster a
            supportive learning environment to help students succeed
            academically and personally.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-xl" />
            <p>LearnXpert, Dhaka,Bangladesh</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-xl" />
            <p>+8801750402019</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-xl" />
            <p>learnxpert112@gamil.com</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200 text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-gray-200 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-200 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-200 text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} LearnXpert. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
