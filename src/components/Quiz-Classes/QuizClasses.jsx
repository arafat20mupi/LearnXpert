import React, { useState } from 'react'

const QuizClasses = () => {
  // const [bgColor, setbgColor] = useState("bg-gray-300");
  // const [borderColor, setborderColor] = useState("border border-gray-300");
  const [Select, setSelect] = useState(null)
  const handleSelect = (id) => {
    // setbgColor("bg-yellow-500")
    // setborderColor("border border-yellow-500")
    setSelect(id)
  }

  const quizBtnText = [
    { id: 1, list: "A", option: "Toy" },
    { id: 2, list: "B", option: "Run Time" },
    { id: 3, list: "C", option: "Programming Language" },
    { id: 4, list: "D", option: "PHP Framework" },
  ];


  return (
    <div className='w-full h-screen pt-28'>
      <div className='container mx-auto py-16 flex flex-col justify-center items-center border rounded-md shadow-md'>
        <h1 className='text-2xl font-bold px-6 py-2 rounded-md'>What is node js?</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 mt-9'>
          {
            quizBtnText.map((el, i) => {
              return (
                <button
                  onClick={() => handleSelect(el.id)}
                  key={i} className={`rounded py-3 pr-4 text-start border-2 ${Select === el.id ? "border border-yellow-500" : "border border-gray-300"}`}>
                  <span
                    className={`py-3 px-5 text-white text-xl ${Select === el.id ? "bg-yellow-500" : "bg-gray-300"
                      }`}
                  >{el.list}</span>
                  <span className='px-3'>{el.option}</span>
                </button>
              )
            })
          }

        </div>
        <div className='h-full w-full mt-12 lg:mt-24 flex justify-around'>
          <span>01/10 Completed</span>
          <spaan>Points : 01</spaan>
        </div>
      </div>
    </div>
  )
}

export default QuizClasses