const Gallery = () => {
  const images = [
    {
      src: "https://media.istockphoto.com/id/2160439321/photo/proud-multiethnic-schoolboy-smiling-at-elementary-school.jpg?s=1024x1024&w=is&k=20&c=EidMJFN3I3r2PnIhoZ9OIJXHMdPe4gcoCM3GsYiQQgk=",
    },
    {
      src: "https://media.istockphoto.com/id/950604178/photo/smiling-hispanic-boy-at-school.jpg?s=1024x1024&w=is&k=20&c=j9LE0JZj5dPjC6MpWRQRKdIe65HsNNOUZEn7Hh_xg_U=",
    },
    {
      src: "https://media.istockphoto.com/id/1182464388/photo/young-boy-in-bright-striped-shirt-wears-backpack.jpg?s=1024x1024&w=is&k=20&c=IuDwnzkCqZuZ32JUOj6LMg6FoaryitPMld08iA3zxOM=",
    },
    {
      src: "https://media.istockphoto.com/id/599900106/photo/cute-elementary-school-student-in-his-classroom.jpg?s=1024x1024&w=is&k=20&c=qyCTKs0bTed1xLu7IUMhd6nmBynnnxUSLrlIyUO75LY=",
    },
    {
      src: "https://media.istockphoto.com/id/125144574/photo/group-of-elementary-age-schoolchildren-standing-outside.jpg?s=1024x1024&w=is&k=20&c=xSxg9ZzwK7s6h-pkhgoNS5BUvr83rcctcrptEgsjqKM=",
    },
    {
      src: "https://media.istockphoto.com/id/2154290466/photo/children-face-and-smile-as-friends-in-classroom-with-backpack-fr-back-to-school-excited-or.jpg?s=1024x1024&w=is&k=20&c=eqqYD_N_7K7otK4hZ5WljJrpET18VGuSH7Wp0KezAZA=",
    },
    {
      src: "https://media.istockphoto.com/id/180811070/photo/elementary-school-children.jpg?s=1024x1024&w=is&k=20&c=z_wFLAwqyHAp26SSNGgqWrW5hzN5VyRKGue5YQKfBEU=",

    },
    {
      src: "https://media.istockphoto.com/id/472977018/photo/cute-pupils-smiling-at-camera-in-classroom.jpg?s=1024x1024&w=is&k=20&c=c_SlsCdvy74MUjwXt7Mutfsg4ybTyYR6hZU9H_LbIno=",
    },
    {
      src: "https://media.istockphoto.com/id/174902294/photo/eager-to-learn.jpg?s=1024x1024&w=is&k=20&c=PL6NsorbuNs6fxV0tD1XyaQUJXTQShzlOUJLe1b6_qA=",
    },
  ];

  return (
    <div className="pb-60 pt-20">
      <div className="relative bg-gray-800 text-white h-32  md:h-48 flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/125144574/photo/group-of-elementary-age-schoolchildren-standing-outside.jpg?s=1024x1024&w=is&k=20&c=xSxg9ZzwK7s6h-pkhgoNS5BUvr83rcctcrptEgsjqKM="
          alt="Gallery Hero"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <h1 className="relative text-4xl md:text-6xl font-bold">Our School Gallery</h1>
      </div>

      <div className="px-5 my-5 md:px-20 text-center">
        <p className="text-sm md:text-lg text-gray-600">
          Explore the vibrant moments of our school life through our gallery.
          From classrooms to extracurricular activities, we capture the essence of learning, joy, and camaraderie.

        </p>

      </div>

      <div className="text-center mb-10 space-y-3">
        <button className="px-5 py-2 mx-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600">
          All
        </button>
        <button className="px-5 py-2 mx-2 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300">
          Students
        </button>
        <button className="px-5 py-2 mx-2 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300">
          Classrooms
        </button>
        <button className="px-5 py-2 mx-2 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300">
          Events
        </button>
      </div>

      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-48 md:h-60 lg:h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-lg text-gray-700">
          Want to learn more about our school? Explore more or get in touch!
        </p>
        <button className="mt-5 px-6 py-2 bg-orange-400 text-white rounded-lg shadow-md hover:bg-orange-600">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Gallery;
