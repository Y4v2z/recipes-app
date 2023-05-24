import React, { useEffect, useState } from 'react'
import './Home.css';
import ProductCard from '../../components/ProductCard';

const Home = () => {
    const [tarifler, setTarifler] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/tarifler")
            .then(res => res.json())
            .then(data => setTarifler(data))
    }, [])
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