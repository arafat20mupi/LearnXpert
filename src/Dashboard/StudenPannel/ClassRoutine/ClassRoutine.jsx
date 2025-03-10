import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../Provider/AuthProvider"
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

export const ClassRoutine = () => {
    const {user} = useContext(AuthContext);
    const [userDetail, setUserDetail] = useState({});
    const [data, setData] = useState({});
    const [year, setYear] = useState(new Date().getFullYear());
    const axios = useAxiosPublic();
    console.log(userDetail); 

    const classTime = [
        "10:00-10:45 AM", "11:30-12:15 PM", "12:15-1:00 PM", 
        "1:00-1:45 PM", "1:45-2:30 PM", "2:30-3:15 PM", "3:15-4:00 PM"
    ];

    const getCurrentUser = async () => {
        try {
          const response = await axios(`/api/get-single-student/${user?.uid}`);

          if(response){
            console.log(response);
            setUserDetail(response?.data?.students);
          }
          
        } catch (error) {
          console.log(error.message);
          console.log(error.response);
        }
      };

      const getAllClassSchedule = async() => {
        try {
            const response = await axios(`/api/get-single-class-schedule/?className=${userDetail?.className}&year=${year.toString()}`);

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


    useEffect(() => {
        getCurrentUser();
        getAllClassSchedule();
    }, [user, userDetail]);

    return (
        <div className="flex flex-col justify-center overflow-x-auto my-8">
            <h2 className="text-center text-3xl font-semibold my-6 underline">Class {userDetail?.className} Routine - 2025</h2>
                <table className="ml-[610px] md:ml-0 w-full uppercase text-center border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 py-5">Day</th>
                            {classTime.map((time, index) => (
                                <th key={time} className="border border-gray-300 px-5 text-left">{time}</th>
                            ))}
                        
                            </tr>
                    </thead>
                    <tbody>
                        {
                                data?.classSchedule?.map((item, index)=>(
                                    <tr key={item}>
                                        <td className="border border-gray-300 px-3 py-5 font-bold">{item?.day}</td>
                                        {
                                            item?.schedules?.map((val, index) => (
                                                <td key={val} className="border border-gray-300 px-3">{val?.subject}</td>
                                            ))
                                        }
                                        
                                    </tr>
                                ))
                            
                        }
                    </tbody>
                </table>
            </div>
    )
}
