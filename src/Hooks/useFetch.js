import axios from "axios";
import { useEffect, useState } from "react"



export const useFetch = (url,customParams={})=>{
    console.log(url);

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState();
    const [isError,setIsError]=useState();
    const options = {
        method:"get",
        baseURL:"https://api.themoviedb.org/3/",
        url:url,
        params:{
            api_key:import.meta.env.VITE_API_KEY,
            ...customParams
        }

    }
    const {page}= customParams
   
    
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios(options)
                console.log(response);
                setData(response.data);
                  setLoading(false)
            } catch (error) {
                setIsError(error.message)
                console.log(error);
                setLoading(false)
            }
        }
        fetchData()
    },[page])
    console.log(data);

    return[data,loading,isError];

}