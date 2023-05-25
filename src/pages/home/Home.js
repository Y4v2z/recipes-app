// import React, { useEffect, useState } from 'react'
import './Home.css';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Home = () => {
    // const [tarifler, setTarifler] = useState(null);
    // useEffect(() => {
    //     fetch("http://localhost:3000/tarifler")
    //         .then(res => res.json())
    //         .then(data => setTarifler(data))
    // }, [])

    const { data: tarifler } = useFetch("http://localhost:3000/tarifler")

    return (

        <div className="row mt-3">
            {
                tarifler && tarifler.map((tarif, index) => (
                    <ProductCard key={index} tarif={tarif} />
                ))
            }
        </div>
    )
}

export default Home;