import React from "react";

const News = () => {
  const schoolNews = [
    {
      title: "New Science Lab Opens",
      description:
        "The school recently unveiled its brand new science lab, equipped with state-of-the-art equipment.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681248156475-f95f078846d5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sports Day Success",
      description:
        "Our school's sports teams had a fantastic day at the inter-school sports meet, winning several medals.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1680807868978-2dc0da7e0284?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Scholarship Winners Announced",
      description:
        "Congratulations to all the students who received scholarships for academic excellence.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "School Play Auditions",
      description:
        "Auditions for the upcoming school play will be held next week. All interested students are encouraged to participate.",
      imageUrl:
        "https://images.unsplash.com/photo-1541018939203-36eeab6d5721?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const upcomingEvents = [
    {
      title: "Parent-Teacher Meeting",
      date: "March 12, 2025",
      description: "A meeting to discuss student progress and share feedback.",
    },
    {
      title: "Annual Day Celebration",
      date: "April 5, 2025",
      description:
        "Join us for a day of performances, awards, and celebrations.",
    },
  ];
  return (
    <div className="my-20 px-4 md:px-8 lg:px-16">
      <div className="my-10">
        <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 relative mb-6">
          <div className="group relative inline-block">
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-orange-500"></span>
            <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-orange-500"></span>
          </div>
          <span className="ml-4">Latest News</span>
        </h1>
        <p className="text-gray-600 md:text-lg text-sm">
          Stay updated with the latest happenings at our school. From events to
          achievements and important announcements, find everything you need to
          know right here!
        </p>
      </div>
      <div
        data-aos="fade-in"
        data-aos-duration="600"
        data-aos-delay="50"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {schoolNews.map((news) => {
          return (
            <div className="relative group w-full h-full" key={news.title}>
              <img
                src={news.imageUrl}
                alt="Our School"
                className="rounded ring-1 ring-gray-500 w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                {news.title}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-orange-500 text-white px-6 py-4 rounded-t-md translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ">
                <div className="space-y-3">
                  <h1>{news.description}</h1>
                  <button className="bg-gradient-to-br from-purple-600 to-pink-600 text-white px-6 py-2 rounded-3xl shadow-lg hover:scale-105 transition-transform">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Upcoming Events
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          {upcomingEvents.map((event, index) => (
            <div
              className="p-6 border border-gray-300 rounded-lg shadow-md"
              key={index}
            >
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm">{event.date}</p>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
