import "./Details.css";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

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

  const { data: tarif, isLoading, error } = useFetch(url)
  const { color } = useContext(ThemeContext)
  return (
    <div className="row mt-3">
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

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
              <a href={tarif.url} className={`btn btn-outline-${color}`} target="_blank" rel="noreferrer" >Tarif Sitesi</a>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Details