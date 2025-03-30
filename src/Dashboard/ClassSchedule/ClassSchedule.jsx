import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const ClassSchedule = () => {
    const [selectClass, setSelectClass] = useState('6');
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState({});
    const axios = useAxiosPublic();
    const [year, setYear] = useState(new Date().getFullYear());
    const years = Array.from({ length: 30 }, (_, i) => 2025 + i);
   

    const classTime = [
        "10:00-10:45 AM", "11:30-12:15 PM", "12:15-1:00 PM", 
        "1:00-1:45 PM", "1:45-2:30 PM", "2:30-3:15 PM", "3:15-4:00 PM"
    ];
    const subjects = ["Bangla", "English", "Math", "Science", "History", "Biology", "Chemistry"];

    const onSubmit = async(data) => {
        const allData = {
            className: selectClass,
            year: year,
            day: data.day,
            schedules: classTime.map((time, index) => ({
                time,
                subject: data.subjects[index] || "", // Handle empty selections
            })),
        };
    

        try {
            const response = await axios.post('/api/post-class-schedule', allData);

            if(response){
                toast.success(response.data.message);
                setSelectClass("6");
                reset();
            }else{
                toast.error("Error uploading class schedule");
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
        
    };

    const getAllClassSchedule = async() => {
        try {
            const response = await axios(`/api/get-single-class-schedule/?className=${selectClass}&year=${year}`);

            if(response){
                setData(response?.data?.getSchedule);
            }else{
                setData({});
            }
        } catch (error) {
            if(error.response){
                setData({});
            }
        }
    }

    const deleteDaySchedule = async(day) => {
        console.log(day);
        try {
            const response = await axios.delete(`/api/delete-class-day-schedule/${day}`);

            if(response){
                toast.success(response.data.message);
                getAllClassSchedule();
            }else{
                toast.error("Day schedule cannot be deleted");
            }

        } catch (error) {
            toast.error("Day schedule cannot be deleted");
        }
    }

    useEffect(()=>{
        getAllClassSchedule();
    }, [selectClass, year, axios]);

    return (
        <div className="my-3 pl-2">
            <select 
                className="my-5 w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                value={selectClass} 
                onChange={(e) => setSelectClass(e.target.value)}
            >
                {/* <option value="">Select Class</option> */}
                {[6, 7, 8, 9, 10].map((cls) => (
                    <option key={cls} value={cls}>Class {cls}</option>
                ))}
            </select>

            <select onChange={(e)=>{setYear(e.target.value)}} className="my-5 mx-5 w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0">
                {
                    years.map((year, i) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))
                }
            </select>

            <div className="flex justify-center overflow-x-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="md:pl-80">
                    <table className="ml-[610px] md:ml-0 w-full text-center border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300">Day</th>
                                {classTime.map((time, index) => (
                                    <th key={index} className="border border-gray-300">{time}</th>
                                ))}
                                <th className="border border-gray-300 px-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-4">
                                    <select {...register("day")} className="p-1 border">
                                        <option value="">Select Day</option>
                                        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"].map((day, index) => (
                                            <option key={index} value={day.toLowerCase()}>{day}</option>
                                        ))}
                                    </select>
                                </td>
                                {classTime.map((_, index) => (
                                    <td key={index} className="border p-2">
                                        <select {...register(`subjects[${index}]`)} className="p-1 border">
                                            <option value="">Select Subject</option>
                                            {subjects.map((sub, i) => (
                                                <option key={i} value={sub.toLowerCase()}>{sub}</option>
                                            ))}
                                        </select>
                                    </td>
                                ))}
                                <td className="px-3">
                                    <button type="submit" className="bg-green-400 text-white px-3 py-1 rounded-md">Upload</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

            <div className="flex flex-col justify-center overflow-x-auto my-8">
            <h2 className="text-center text-3xl font-semibold my-6 underline">Class {selectClass} Routine - {year}</h2>
                <table className="ml-[610px] md:ml-0 w-full uppercase text-center border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 py-5">Day</th>
                            {classTime.map((time, index) => (
                                <th key={index} className="border border-gray-300 px-5 text-left">{time}</th>
                            ))}
                            <th className="border border-gray-300">Action</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                                data?.classSchedule?.map((item, i)=>(
                                    <tr key={item}>
                                        <td className="border border-gray-300 px-3 py-5 font-bold">{item.day}</td>
                                        {
                                            item.schedules.map((time, i) => (
                                                <td key={time} className="border border-gray-300 px-3">{time.subject}</td>
                                            ))
                                        }
                                        <td className="border border-gray-300 px-3">
                                            <button className="bg-red-500 px-3 py-1 text-white rounded-lg" onClick={()=>deleteDaySchedule(item.day)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClassSchedule;
