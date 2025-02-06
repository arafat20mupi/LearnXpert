import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import emailjs from '@emailjs/browser';
import { GiRunningNinja } from "react-icons/gi";

const Admission = () => {
    const [admissionData, setAdmissionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axios = useAxiosPublic();

    const sendEmail = (studentName, email, message) => {
        const templateParams = {
            to_email: email,
            to_name: studentName,
            message: message,
        };

        emailjs.send("service_a0y6mrq", "template_s238gec", templateParams, "Ky7ONgXherTO2a529")
            .then(
                () => alert("Congratulations email sent successfully!"),
                (error) => alert("Failed to send email. Please try again.")
            );
    }

    const handleApprove = async (id, status, studentName, email) => {
        try {
            if (status === "Pending") {
                const response = await axios.put(`/api/admission-approve/${id}`);
                setAdmissionData(response.data.update);
                sendEmail(studentName, email, "Congratulations! Your admission is confirmed.");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleReject = async (id, status, studentName, email) => {
        try {
            if (status === "Pending") {
                const response = await axios.put(`/api/admission-reject/${id}`);
                setAdmissionData(response.data.update);
                sendEmail(studentName, email, "Sorry! your admission is rejected");
            }
        } catch (error) {
            console.error(error.message);
        }
    };


    useEffect(() => {
        const fetchAdmissionData = async () => {
            try {
                const response = await axios.get('/api/get-admission-data');
                setAdmissionData(response.data.admission);
            } catch (err) {
                setError("Failed to fetch students");
            } finally {
                setLoading(false);
            }
        };
        fetchAdmissionData();
    }, [axios]);

    if (loading) {
        return (
            <div className="flex w-full items-center justify-center pt-20">
                <GiRunningNinja className="text-[2.8rem] animate-bounce h-16 w-16 md:h-36 md:w-36 text-green-500" />
            </div>
        );
    }

    return (
        <div className="overflow-x-auto p-5">
            <table className="w-full border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="px-4 py-3">ID</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Applying Class</th>
                        <th className="px-4 py-3">Guardian Name</th>
                        <th className="px-4 py-3">Guardian Contact</th>
                        <th className="px-4 py-3">Guardian Email</th>
                        <th className="px-4 py-3">Gender</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {admissionData?.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-100">
                            <td className="px-4 py-3 text-center">{i + 1}</td>
                            <td className="px-4 py-3">{item.studentName}</td>
                            <td className="px-4 py-3 text-center">{item.className}</td>
                            <td className="px-4 py-3">{item.guardianName}</td>
                            <td className="px-4 py-3 text-center">{item.guardianContact}</td>
                            <td className="px-4 py-3 text-center">{item.guardianEmail}</td>
                            <td className="px-4 py-3 text-center">{item.gender}</td>
                            <td className="px-4 py-3 text-center flex gap-1">

                                {
                                    item?.status === "Approved" ? 
                                        <button className="bg-green-500 px-4 py-2 rounded-full text-white">Approved</button> : 
                                        item.status === "Rejected" ? 
                                        <button className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded-full text-white">Rejected</button> :
                                    <>
                                        <button>Pending</button>
                                        <button className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-full text-white" onClick={()=>{handleApprove(item.id, item.status, item.studentName, item.guardianEmail)}}>Approve</button>
                                        <button className="bg-red-500 hover:bg-red-700 px-6 py-2 rounded-full text-white" onClick={()=>handleReject(item._id, item.status, item.studentName, item.guardianEmail)}>Reject</button>
                                    </>
                                }
                                {/* <button className={`px-4 py-2 rounded-full text-white ${item.status === "Pending" ? "bg-red-500" : "bg-green-500"}`}>{item.status}</button>
                                <button onClick={()=>{handleApprove(item.id, item.status, item.studentName, item.guardianEmail)}} className="px-4 py-2 rounded-full text-white bg-green-500 hover:bg-green-700">Approve</button>
                                <button className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded-full text-white" onClick={()=>handleReject(item._id, item.status, item.studentName, item.guardianEmail)}>Reject</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admission;
