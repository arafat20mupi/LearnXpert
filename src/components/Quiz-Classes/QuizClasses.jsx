import React from 'react'

const QuizClasses = () => {
  const quizBtnText = [
      {id: 1, list: "A", option: "Toy", bgColor: "bg-gray-300", borderColor: "border border-gray-300"},
      {id: 2, list: "B", option: "Run Time", bgColor: "bg-green-500", borderColor: "border border-green-500" },
      {id: 3, list: "C", option: "Programming Language", bgColor: "bg-gray-300", borderColor: "border border-gray-300"},
      {id: 4, list: "D", option: "Php Framework", bgColor: "bg-gray-300", borderColor: "border border-gray-300"},
  ];


  return (
    <div className='w-full h-screen pt-28'>
      <div className='container mx-auto py-16 flex flex-col justify-center items-center border rounded-md shadow-md'>
          <h1 className='text-2xl font-bold px-6 py-2 rounded-md'>What is node js?</h1>
          <div className='grid md:grid-cols-2 md:gap-12 mt-9'>
            {
              quizBtnText.map((el, i)=>{
                
                  return(
                    <button key={el.id} className={`py-3 pr-4 text-start border-2 ${el.borderColor}`}>
                        <span className={`${el.bgColor} py-3 px-5 text-white text-xl`}>{el.list}</span>
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