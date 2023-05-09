import React, { useState, useEffect, useCallback } from "react";
import { PUBLIC_KEY } from "../keys";

const useFetch = (url, offset = 0) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);


  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      console.log("useeffect");
      const res = await fetch(`${url}?apikey=${PUBLIC_KEY}`)
      const data = await res.json();
 console.log(data, "data")
      setData(data);
      setTotal(data.data.total)
    } catch (error) {
      setIsError(true);
      console.error(error)
    }
    setIsLoading(false);
  }, [])
  //   `https://gateway.marvel.com:443/v1/public/characters?apikey=39c37ddfc3fecc245db8bbe0683646d2`
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { isLoading, isError, data, total };
};

export default useFetch;
