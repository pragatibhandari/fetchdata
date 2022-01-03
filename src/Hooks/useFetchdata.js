import axios from "axios";
import { useState, useEffect } from "react";

const URL = "https://api.openbrewerydb.org/breweries";

const useFetchdata = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchdeData = axios
      .get(URL)
      .then((response) => setUsers(response.data))
      .catch((err) => {
        setError(err);
      });
    return () => {
      fetchdeData();
    };
  }, []);
  return { users, error };
};
export default useFetchdata;