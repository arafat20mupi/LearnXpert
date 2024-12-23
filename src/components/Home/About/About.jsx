import React from 'react';

const About = () => {
    return (
        <div className="my-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
            {/* Text Section */}
            <div className="space-y-3">
                <h1 className="text-2xl left-5 md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 relative mb-6">
                    <div className="group relative inline-block">
                        <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-orange-500"></span>
                        <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-orange-500"></span>
                    </div>
                    <span className="ml-4">About Our School</span>
                </h1>
                <p className="text-[15px] md:text-base leading-relaxed text-gray-700">
                    Welcome to <span className="font-semibold text-orange-500">LearnXpert</span>, where we are dedicated to providing top-notch education and fostering a love for learning in our students. Our school offers a diverse curriculum that caters to the needs of every student, ensuring they receive a well-rounded education.
                </p>
                <p className="text-[15px] md:text-base leading-relaxed text-gray-700">
                    Our experienced and passionate teachers are committed to helping each student reach their full potential. We believe in creating a supportive and inclusive environment where students can thrive academically, socially, and emotionally. Join us and become part of a community that values excellence, innovation, and lifelong learning.
                </p>
                <button className="bg-gradient-to-rhover:from-purple-600 hover:to-pink-800 ease bg-gradient-to-br from-purple-600 text-white px-6 py-3 rounded-3xl to-pink-600  shadow-lg hover:scale-105 transition-transform">
                    Learn More
                </button>
            </div>

            {/* Image Section */}
            <div className="relative group">
                <img
                    src="school.jpg"
                    alt="Our School"
                    className="rounded-xl ring-2 ring-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    Excellence in Education
                </div>
            </div>
        </div>
    );
};

export default About;
