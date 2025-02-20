import { useEffect } from "react";
import SUCCESSIMAGE from "../../assets/success.gif";
import { useLocation } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Success = () => {
  const axios = useAxiosPublic();
  const location = useLocation();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionId = new URLSearchParams(location.search).get('session_id');

      if (sessionId) {
        const response = await axios(`/api/retrieve/${sessionId}`);
        console.log(response.data);
      }
    };
 
    fetchSession();
  }, [location]);

  return (
    <div className="bg-slate-200 mt-24 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded">
      <img src={SUCCESSIMAGE} width={150} height={150} alt="success" />
      <p className="text-green-600 font-bold text-xl">Payment Successful</p>
    </div>
  );
};

export default Success;
