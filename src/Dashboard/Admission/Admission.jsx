import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import emailjs from '@emailjs/browser';


const Admission = () => {
    const [admissionData, setAdmissionData] = useState([]);
    console.log(admissionData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axios = useAxiosPublic();

    const sendEmail = (studentName, email) => {
        const templateParams = {
            to_email: email,
            to_name: studentName,
            message: "Congratulation. Your admission is confirmed", // custom message
        };

        emailjs
        .send("service_a0y6mrq", "template_s238gec", templateParams, "Ky7ONgXherTO2a529")
        .then(
            (response) => {
                console.log("Email sent successfully!", response.status, response.text);
                alert("Congratulations email sent successfully!");
            },
            (error) => {
                console.error("Failed to send email:", error);
                alert("Failed to send email. Please try again.");
            }
        );
    }
   
    const changeStatus = async(id, status, studentName, email) => {
        try {
            if(status === "Pending"){
                const response = await axios.put(`/api/change-status/${id}`);
                console.log(response.data);
                setAdmissionData(response.data.update);
                sendEmail(studentName, email)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

     useEffect(() => {
        const fetchAdmissionData = async () => {
          try {
            const response = await axios.get('/api/get-admission-data');
            setAdmissionData(response.data.admission);
          } catch (err) {
            console.error(err);
            setError("Failed to fetch students");
          } finally {
            setLoading(false);
          }
        };
    
        fetchAdmissionData();
      }, [axios]);

  return (
    <>
        <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Applying Class</th>
                    <th>Guardian Name</th>
                    <th>Guardian Contact</th>
                    <th>Guardian Email</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               {
                    admissionData?.map((item, i)=> {
                        return(
                           <tr key={i}>
                                <td>{"00" + Number(i+1)}</td>
                                <td>{item.studentName}</td>
                                <td>{item.className}</td>
                                <td>{item.guardianName}</td>
                                <td>{item.guardianContact}</td>
                                <td>{item.guardianEmail}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <button onClick={()=>changeStatus(item._id, item.status, item.studentName, item.guardianEmail)} className="px-3 py-1 bg-red-600 text-white rounded-full">{item.status}</button>
                                </td>
                           </tr>
                        )
                    })
               }
            </tbody>
        </table>
    </>
  )
}

export default Admission