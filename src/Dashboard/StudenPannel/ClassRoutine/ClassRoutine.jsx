import React from 'react'

export const ClassRoutine = () => {
    return (
        <div className='my-10'>
            <h1 className='text-xl font-bold'>Class Routine</h1>
            <select
                name=""
                id=""
                className="w-full my-3 md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
            >
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
            </select>
            <img src="school.jpg" alt="" />
        </div>
    )
}
