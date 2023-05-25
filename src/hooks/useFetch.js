import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // 1 Promise Yöntemi
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setData(data))

        //  2 async-await Yöntemi

        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }
        fetchData();
    }, [url])

    return {
        data
    }
}

export default useFetch;