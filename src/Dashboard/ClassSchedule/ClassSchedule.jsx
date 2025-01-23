import React, { useState } from "react";

const ClassSchedule = () => {
    const [selectClass, setselectClass] = useState('6')
    const class_7 = [
        {
            day: "Monday",
            schedule: [
                { time: "11:30-12:15 PM", subject: "Math" },
                { time: "10:00-10:45 AM", subject: "English" },
                { time: "12:15-01:00 PM", subject: "Science" },
                { time: "01:45-02:30 PM", subject: "ICT" },
                { time: "01:00-01:45 PM", subject: "History" },
                { time: "10:45-11:30 AM", subject: "Bangla" },
            ],
        },
        {
            day: "Tuesday",
            schedule: [
                { time: "10:45-11:30 AM", subject: "Science" },
                { time: "12:15-01:00 PM", subject: "ICT" },
                { time: "10:00-10:45 AM", subject: "Math" },
                { time: "11:30-12:15 PM", subject: "History" },
                { time: "01:45-02:30 PM", subject: "Bangla" },
                { time: "01:00-01:45 PM", subject: "English" },
            ],
        },
        {
            day: "Wednesday",
            schedule: [
                { time: "10:00-10:45 AM", subject: "Science" },
                { time: "12:15-01:00 PM", subject: "English" },
                { time: "11:30-12:15 PM", subject: "ICT" },
                { time: "01:45-02:30 PM", subject: "Math" },
                { time: "10:45-11:30 AM", subject: "History" },
                { time: "01:00-01:45 PM", subject: "Bangla" },
            ],
        },
        {
            day: "Thursday",
            schedule: [
                { time: "10:00-10:45 AM", subject: "History" },
                { time: "10:45-11:30 AM", subject: "ICT" },
                { time: "12:15-01:00 PM", subject: "Bangla" },
                { time: "01:45-02:30 PM", subject: "Science" },
                { time: "01:00-01:45 PM", subject: "Math" },
                { time: "11:30-12:15 PM", subject: "English" },
            ],
        },
        {
            day: "Sunday",
            schedule: [
                { time: "10:45-11:30 AM", subject: "English" },
                { time: "10:00-10:45 AM", subject: "ICT" },
                { time: "12:15-01:00 PM", subject: "Math" },
                { time: "01:00-01:45 PM", subject: "Science" },
                { time: "11:30-12:15 PM", subject: "Bangla" },
                { time: "01:45-02:30 PM", subject: "History" },
            ],
        },
    ];
    const class_6 = [
        {
            day: "Monday",
            schedule: [
                { time: "10:00-10:45 AM", subject: "English" },
                { time: "10:45-11:30 AM", subject: "Bangla" },
                { time: "11:30-12:15 PM", subject: "Math" },
                { time: "12:15-01:00 PM", subject: "Science" },
                { time: "01:00-01:45 PM", subject: "History" },
                { time: "01:45-02:30 PM", subject: "ICT" },
            ],
        },
        {
            day: "Tuesday",
            schedule: [
                { time: "10:00-10:45 AM", subject: "Math" },
                { time: "10:45-11:30 AM", subject: "Science" },
                { time: "11:30-12:15 PM", subject: "History" },
                { time: "12:15-01:00 PM", subject: "ICT" },
                { time: "01:00-01:45 PM", subject: "English" },
                { time: "01:45-02:30 PM", subject: "Bangla" },
            ],
        },
        {
            day: "Wednesday",
            schedule: [
                { time: "10:00-10:45 AM", subject: "Science" },
                { time: "10:45-11:30 AM", subject: "History" },
                { time: "11:30-12:15 PM", subject: "ICT" },
                { time: "12:15-01:00 PM", subject: "English" },
                { time: "01:00-01:45 PM", subject: "Bangla" },
                { time: "01:45-02:30 PM", subject: "Math" },
            ],
        },
        {
            day: "Thursday",
            schedule: [
                { time: "10:00-10:45 AM", subject: "History" },
                { time: "10:45-11:30 AM", subject: "ICT" },
                { time: "11:30-12:15 PM", subject: "English" },
                { time: "12:15-01:00 PM", subject: "Bangla" },
                { time: "01:00-01:45 PM", subject: "Math" },
                { time: "01:45-02:30 PM", subject: "Science" },
            ],
        },
        {
            day: "Sunday",
            schedule: [
                { time: "10:00-10:45 AM", subject: "ICT" },
                { time: "10:45-11:30 AM", subject: "English" },
                { time: "11:30-12:15 PM", subject: "Bangla" },
                { time: "12:15-01:00 PM", subject: "Math" },
                { time: "01:00-01:45 PM", subject: "Science" },
                { time: "01:45-02:30 PM", subject: "History" },
            ],
        },
    ];

    return (
        <div className="my-3 pl-2">
            <select name="" id="" className="my-5 w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0" value={selectClass} onChange={(e) => setselectClass(e.target.value)}>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
            </select>
            {selectClass === '6' && (
                <div className="flex justify-center overflow-x-auto">
                    <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <td className="px-16 md:p-3 border border-gray-300 font-bold">Day</td>
                                <td colSpan={10} className="px-16 md:p-3 border border-gray-300 font-bold">
                                    Time and subject
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {class_6.map((slot, index) => (
                                <tr key={index} className={`bg-white hover:bg-blue-50`}>
                                    <td className="px-16 md:p-3 border border-gray-300">
                                        {slot.day}
                                    </td>
                                    {slot.schedule.map((data, dataIndex) => (
                                        <td
                                            key={dataIndex}
                                            className="px-16 md:p-3 border border-gray-300"
                                        >
                                            {data.time} - <h1 className="font-bold">{data.subject}</h1>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {
                selectClass === "7" && (
                    <div className="flex justify-center overflow-x-auto">
                        <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <td className="px-16 md:p-3 border border-gray-300 font-bold">Day</td>
                                    <td colSpan={10} className="px-16 md:p-3 border border-gray-300 font-bold">
                                        Time and subject
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {class_7.map((slot, index) => (
                                    <tr key={index} className={`bg-white hover:bg-blue-50`}>
                                        <td className="px-16 md:p-3 border border-gray-300">
                                            {slot.day}
                                        </td>
                                        {slot.schedule.map((data, dataIndex) => (
                                            <td
                                                key={dataIndex}
                                                className="px-16 md:p-3 border border-gray-300"
                                            >
                                                {data.time} - <h1 className="font-bold">{data.subject}</h1>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
            {
                selectClass === "8" && (<div className="flex justify-center overflow-x-auto">
                    <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <td className="px-16 md:p-3 border border-gray-300 font-bold">Day</td>
                                <td colSpan={10} className="px-16 md:p-3 border border-gray-300 font-bold">
                                    Time and subject
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {class_7.map((slot, index) => (
                                <tr key={index} className={`bg-white hover:bg-blue-50`}>
                                    <td className="px-16 md:p-3 border border-gray-300">
                                        {slot.day}
                                    </td>
                                    {slot.schedule.map((data, dataIndex) => (
                                        <td
                                            key={dataIndex}
                                            className="px-16 md:p-3 border border-gray-300"
                                        >
                                            {data.time} - <h1 className="font-bold">{data.subject}</h1>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>)
            }
            {
                selectClass === "9" && (<div className="flex justify-center overflow-x-auto">
                    <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <td className="px-16 md:p-3 border border-gray-300 font-bold">Day</td>
                                <td colSpan={10} className="px-16 md:p-3 border border-gray-300 font-bold">
                                    Time and subject
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {class_7.map((slot, index) => (
                                <tr key={index} className={`bg-white hover:bg-blue-50`}>
                                    <td className="px-16 md:p-3 border border-gray-300">
                                        {slot.day}
                                    </td>
                                    {slot.schedule.map((data, dataIndex) => (
                                        <td
                                            key={dataIndex}
                                            className="px-16 md:p-3 border border-gray-300"
                                        >
                                            {data.time} - <h1 className="font-bold">{data.subject}</h1>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>)
            }
            {
                selectClass === "10" && (<div className="flex justify-center overflow-x-auto">
                    <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <td className="px-16 md:p-3 border border-gray-300 font-bold">Day</td>
                                <td colSpan={10} className="px-16 md:p-3 border border-gray-300 font-bold">
                                    Time and subject
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {class_7.map((slot, index) => (
                                <tr key={index} className={`bg-white hover:bg-blue-50`}>
                                    <td className="px-16 md:p-3 border border-gray-300">
                                        {slot.day}
                                    </td>
                                    {slot.schedule.map((data, dataIndex) => (
                                        <td
                                            key={dataIndex}
                                            className="px-16 md:p-3 border border-gray-300"
                                        >
                                            {data.time} - <h1 className="font-bold">{data.subject}</h1>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
};

export default ClassSchedule;
