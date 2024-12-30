import React from 'react'

const ClassSchedule = () => {
    return (
        <div className='my-3 pl-2'>
            <div className="flex justify-center overflow-x-auto">
                <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-16 md:p-3 border border-gray-300">English</th>
                            <th className="px-16 md:p-3 border border-gray-300">Bangla</th>
                            <th className="px-16 md:p-3 border border-gray-300">Math</th>
                            <th className="px-16 md:p-3 border border-gray-300">Science</th>
                            <th className="px-16 md:p-3 border border-gray-300">History</th>
                            <th className="px-16 md:p-3 border border-gray-300">ICT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={`bg-white hover:bg-blue-50`}>
                            <td className="p-3 border border-gray-300">10:00-10:45 AM</td>
                            <td className="p-3 border border-gray-300">10:45-11:30 AM</td>
                            <td className="p-3 border border-gray-300">11:30-12:15 PM</td>
                            <td className="p-3 border border-gray-300">12:15-01:00 PM</td>
                            <td className="p-3 border border-gray-300">01:00-01:45 PM</td>
                            <td className="p-3 border border-gray-300">01:45-02:30 PM</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ClassSchedule