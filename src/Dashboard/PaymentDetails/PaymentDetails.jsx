import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from 'react-hot-toast';

const PaymentDetails = () => {
  const axios = useAxiosPublic();
  const [students, setStudents] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [duePayment, setDuePayment] = useState(0);
  const [selectedClass, setSelectedClass] = useState("6");

  
  const handlePayment = async(name, className, rollNo, email, firebaseUid) => {
      try {
        const paymentDetail = {name, className, rollNo, email, firebaseUid, month, year, duePayment};
        console.log(paymentDetail);
        const response = await axios.post("/api/post-payment", {paymentDetail});
        if(response.status === 200){
            toast.success(response?.data?.message);
        }else{
            toast.error(response?.data?.message);
        }
        console.log(response);
      } catch (error) {
          console.log(error.message);
      }
  }


  const fetchStudents = async () => {
    try {
      const response = await axios(`/api/students/${selectedClass}`);
      setStudents(response?.data);
      console.log(response?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [axios, selectedClass]);

  return (
    <div className="my-3 pl-2">
      <h1 className="text-black text-xl mb-3">Add Students</h1>
      <div className="flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3  my-3">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
        >
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
          type="text"
          placeholder="Search by name..."
        />
      </div>

      <h1 className="text-black text-xl mb-3">All Students</h1>
      <div className="flex justify-center overflow-x-auto">
        <div className="w-full overflow-y-auto">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-16 md:p-3 border border-gray-300">Name</th>
                <th className="px-16 md:p-3 border border-gray-300">Class</th>
                <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                <th className="px-16 md:p-3 border border-gray-300">Email</th>
                <th className="px-16 md:p-3 border border-gray-300">Phone</th>
                <th className="px-16 md:p-3 border border-gray-300">Address</th>
                <th className="px-16 md:p-3 border border-gray-300">Month</th>
                <th className="px-16 md:p-3 border border-gray-300">Amount</th>
                <th className="px-16 md:p-3 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((item, index) => (
                <tr key={index}>
                  <td className="p-3 border border-gray-300">{item.name}</td>
                  <td className="p-3 border border-gray-300">
                    {item.className}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {item.rollNo}
                  </td>
                  <td className="p-3 border border-gray-300">{item.email}</td>
                  <td className="p-3 border border-gray-300">{item.phone}</td>
                  <td className="p-3 border border-gray-300">{item.address}</td>
                  <td className="p-3 border border-gray-300">
                  

                  <select onChange={(e)=>setMonth(e.target.value)} value={month}>
                      <option value="">Select Month</option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                  </select>



                  </td>
                  <td className="p-3 border border-gray-300">
                  
                  

                   <select onChange={(e)=>setYear(e.target.value)} value={year}>
                          <option value={year}>
                              {
                                new Date().getFullYear()
                              }
                          </option>
                  </select> 



                  </td>
                  <td className="p-3 border border-gray-300">
                    <input
                      type="number"
                      placeholder="Enter ammount"
                      onChange={((e) => setDuePayment(e.target.value))}
                      value={duePayment}
                      className="w-full md:w-[200px] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                    />
                  </td>
                  <td>
                    <button onClick={()=>{handlePayment(item.name,item.className, item.rollNo, item.email, item.firebaseUid)}} className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-600 duration-200 text-white mx-5">
                      Send
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
