import { PiNumberCircleSeven } from "react-icons/pi";
import { PiNumberCircleEight } from "react-icons/pi";
import { PiNumberCircleNine } from "react-icons/pi";

const Quiz = () => {
  const card = [
    { id: 7, icon: <PiNumberCircleSeven className="size-10" />, className: "Class Seven" },
    { id: 8, icon: <PiNumberCircleEight className="size-10" />, className: "Class Eight" },
    { id: 9, icon: <PiNumberCircleNine className="size-10" />, className: "Class Nine" },
  ];

  const colors = [
    { textColor: "text-green-500", bgColor: "bg-green-100" },
    { textColor: "text-blue-500", bgColor: "bg-blue-100" },
    { textColor: "text-red-500", bgColor: "bg-red-100" },
  ];

  return (
    <div className="pb-5 pt-24 w-full min-h-screen px-2">
         <div className="text-center my-16 relative">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 mb-2">
          <div className="group relative inline-block">
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-orange-500"></span>
            <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-orange-500"></span>
          </div>
          <span className="ml-3">Explore Our Quiz Challenges</span>
        </h1>

        <h2 className="text-xl text-gray-600 font-medium">
            Select your class and test your knowledge with engaging quizzes designed just for you!
        </h2>
      </div>
      <div className="container mx-auto border flex flex-col bg-cover items-center md:flex md:flex-row md:justify-center gap-7 border-gray-300 rounded-lg p-4 shadow-lg bg-white py-10">
     
        {card.map((el, i) => {
          const color = colors[i % colors.length]; // Ensure it cycles if there are more cards than colors
          return (
            <div
              key={el.id}
              className="w-80 h-96 bg-white border hover:shadow-2xl transition-shadow duration-300 rounded-2xl text-center"
            >
              <div className="pt-10">
                <div>
                  <span className={`text-2xl inline-block ${color.textColor} ${color.bgColor} p-4 rounded-full`}>
                    {el.icon}
                  </span>
                </div>
                <span className="block mt-8">{el.className}</span>
              </div>
              <button className="bg-white rounded-lg text-green-500 ring ring-green-400 inline-block px-16 py-2 mt-16">
                Play Quiz
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
  