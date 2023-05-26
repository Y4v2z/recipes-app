import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // 1 Promise Yöntemi
        // setIsLoading(true)
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setData(data)
        //         setIsLoading(false)
        //     })

        //  2 async-await Yöntemi

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url);
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
        fetchData();
    }, [url])

    return {
        data: data, isLoading, error
    }
}

export default useFetch;