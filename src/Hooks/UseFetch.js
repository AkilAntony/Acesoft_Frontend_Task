import { useEffect,useState } from "react";
import axios from 'axios'

export const useFetch = (url)=>{
    const [error ,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState(null)
    
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false)
            }
            catch(err){
                setError(console.log(err))
            }
        }
        fetchData();
    },[url])
    return {data,loading, error}
   
}

 