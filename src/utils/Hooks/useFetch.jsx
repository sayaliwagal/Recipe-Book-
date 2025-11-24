import React, { useEffect, useState } from 'react'

const useFetch = (url, options = {}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    if(!url) return;

    const fetchData = async () =>{
        try{
            setLoading(true);
            const response = await fetch(url,options);
            if(!response.ok){
                throw new Error("Failed to Fetch data");
            }
            
            const res = await response.json();
            setData(res);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
        useEffect(() => {
            fetchData();
        },[url]);

        return { data, loading, error };

}

export default useFetch
