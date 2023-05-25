// import React, { useEffect } from 'react'
import "./Details.css";
import { useParams } from 'react-router-dom';
// import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const Details = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/tarifler/" + id;
  // useFetch kullanılmazsa bu şekilde.
  // const [tarif, setTarif] = useState(null);
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setTarif(data))
  // }, [url])

  const { data: tarif } = useFetch(url)
  return (
    <div className="row mt-3">
      {
        tarif && (
          <>
            <div className="col-4">
              <img src={`/img/${tarif.resim}`} alt={tarif.baslik} className='img-fluid rounded' />
            </div>
            <div className="col-8">
              <h5>{tarif.baslik}</h5>
              <p>{tarif.aciklama}</p>
              <ul>
                {
                  tarif.malzemeler.map((malzeme, index) => (
                    <li key={index} >{malzeme}</li>
                  ))
                }
              </ul>
            </div>
            <hr className='mt-2' />
            <div className="col-12 mt-3">
              <p>{tarif.hazirlanisi}</p>
              <a href={tarif.url} className='btn btn-outline-primary' >Tarif Sitesi</a>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Details