import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Modal from './detailsmodal';
import './details.css';
import { URL } from '../../constants';
import loader from '../../assets/loader.gif';
import rotate from '../../assets/rotate.svg';
import arrow from '../../assets/right-arrow.svg';
import circle from '../../assets/circle.png';

const DetailsPage = () => {
  const { id } = useParams();
  const [motorcycle, setMotorcycle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch(`${URL}/api/v1/motorcycles/${id}`)
      .then((response) => response.json())
      .then((data) => setMotorcycle(data));
  }, [id]);
  const turnImage = () => {
    const img = document.getElementById('myImage');
    img.classList.toggle('rotate-image');
  };

  return (
    <div className="main-holder">
      {motorcycle ? (
        <section className="details-holder">
          <div>
            <img id="myImage" src={motorcycle.image_url} className="d-motorcycle-image" alt="img" />
            <button type="button" className="rotate-btn" onClick={turnImage}>
              <img src={rotate} alt="rotate" width="40px" />
            </button>
          </div>
          <div className="motorcycle-info">
            <ul>
              <li className="name">{motorcycle.name}</li>
              <li className="-info">
                PRICE
                {' '}
                <span>
                  {motorcycle.price}
                  $
                </span>
              </li>
              <li className="-info">
                DISCRIPTION
                {' '}
                <span>{motorcycle.description}</span>
              </li>
             
              <li className="-info">
                MODEL
                {' '}
                <span>{motorcycle.model}</span>
              </li>
              <li className="-info">
                YEAR MANUFACTURED
                {' '}
                <span>{motorcycle.year}</span>
              </li>
              <div className="link">
                <Link to="/" className="discover">
                  Discover more motorcycles
                  {' '}
                  <img src={arrow} alt="left arrow" width="10px" />
                </Link>
                <img className="circle" src={circle} alt="circle" />
                <button type="button" onClick={handleModalOpen}>Reserve +</button>
              </div>
            </ul>
          </div>
        </section>
      ) : (
        <img className="loading-motorcycle" src={loader} alt="loading" />
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="cls-m-btn"
              type="button"
              onClick={handleModalClose}
            >
              X
            </button>
            <br />
            <Modal selectedMotorcycle={motorcycle} setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;