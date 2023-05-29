import { useState, useEffect } from 'react'

const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, SetOptions] = useState(null)

    const postData = (data) => {
        SetOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    useEffect(() => {

        const fetchData = async (options) => {
            setIsLoading(true)
            try {
                const res = await fetch(url, { ...options });
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json();
                setIsLoading(false)
                setData(data);

            } catch (err) {
                setIsLoading(false);
                setError(err.message)
            }
        }
        if (method === "GET") {
            fetchData();
        }
        if (method === "POST" && options) {
            fetchData(options)
        }
    }, [url, options, method])

    return {
        data: data, isLoading, error, postData
    }
}
export default useFetch;

// 1 Promise Yöntemi
// setIsLoading(true)
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         setData(data)
//         setIsLoading(false)
//     })
//  2 async-await Yöntemi