import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const StudentProfile = () => {
  const { user } = useContext(AuthContext);
  const [userDetail, setUserDetail] = useState({});
  const [paymentDetail, setPaymentDetail] = useState({});
  const axios = useAxiosPublic();



  const getCurrentUser = async () => {
    try {
      const response = await axios(`/api/get-single-student/${user?.uid}`);
      const data = await response?.data;
      setUserDetail(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPaymentDetail = async () => {
    try {
      const response = await axios(`/api/payment-details/${user?.uid}`);
      const data = await response?.data;
      setPaymentDetail(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getCurrentUser();
    getPaymentDetail();
  }, [axios, user]);


  const photo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWBQmFSOxkbxNfQV0oQXHQ95vVcC-jM4luw&s"



  const handlePayment = async (month, year, duePayment) => {
    const stripe = await loadStripe("pk_test_51QPkuRGLRxtB32IDebIxkMEvw5raa70RYN0qrXmk5R3gcXVJtl2o3PZoYFwvXrsvQQod1HftIp4TvyfIMs9wq4qD00BoDzot7v");
    const info = { name: paymentDetail?.name, firebaseUid: paymentDetail?.firebaseUid, email: paymentDetail?.email, month, year, duePayment }

    const response = await axios.post('/api/checkout', { info });
    const data = await response.data;

    stripe.redirectToCheckout({
      sessionId: data.id
    });

  }
  console.log(paymentDetail)

  return (
    <div className="bg-gray-100 py-10">
      <div className="flex justify-center items-center">
        <div className="space-y-8">
          <div
            className="max-w-md p-6 mx-auto bg-white shadow-lg rounded-lg"
          >
            <div className="flex flex-col items-center mb-6">
              <img
                className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4"
                src={photo}
              />
              <h2 className="text-2xl font-semibold text-gray-800">
                {userDetail?.name}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="text-gray-600">{userDetail?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Class:</span>
                <span className="text-gray-600">{userDetail?.className}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Roll No:</span>
                <span className="text-gray-600">{userDetail?.rollNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Address:</span>
                <span className="text-gray-600">{userDetail?.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-center text-xl">Your Outstanding</h1>
      </div>
      <div className="pt-0 pb-10 flex px-0 justify-center md:justify-normal md:px-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paymentDetail?.payment?.map((info, key) => (
            <div
              key={key}
              className="px-8 py-5 rounded-md bg-white shadow-md ring-1 ring-gray-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {info.month.toUpperCase()} {info.year}
              </h2>
              <h3 className="text-lg text-gray-600">{info.duePayment} BDT</h3>
              <h3>Status : {info.status}</h3>
              {
                info.status === "Pending" && <button className="bg-green-500 text-white px-3" onClick={() => { handlePayment(info.month, info.year, info.duePayment) }}>Pay now</button>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
