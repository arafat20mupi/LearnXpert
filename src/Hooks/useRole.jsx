import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';

const useRole = () => {
  const { user } = useContext(AuthContext); // User info from context (or wherever you're managing it)
  const [role, setRole] = useState(null); // Store user role
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axios = useAxiosPublic(); // Axios instance for making API calls

  useEffect(() => {
    const checkUserRole = async () => {
      if (!user || !user.uid) {
        setLoading(false);
        return;
      }

      try {
        // Call the API to check the user's role
        const response = await axios.get(`/api/check-Role/${user.uid}`);
        
        // Assuming the response has role like { role: 'admin' }
        setRole(response.data.role);  // Set role based on backend response
      } catch (err) {
        console.error("Error fetching role:", err);
        setError(err.response ? err.response.data.error : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();
  }, [user, axios]);

  return { role, loading, error };
};

export default useRole;
