import React, { useState } from 'react';
import './reservationForm.css';
import Select from 'react-select';
import Modal from '../modal/Modal';

const cities = [
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'san-francisco', label: 'San Francisco' },
];
function ReservationForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <div className="header">
                <div className="nav">
                    <div className="nav-icon">
                        <i className="fas fa-bars" />
                    </div>
                    <div className="search-icon">
                        <i className="fas fa-search" />
                    </div>
                </div>
                <div className="title">
                    <h4>BOOK A TEST DRIVE WITH WHEEL-WIZARD</h4>
                    <hr className="divider" />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, blanditiis. lorem10
                    </p>
                </div>
                <div className="buttons">
                    {/* <button type="button" onClick={() =>
            handleCitySelection(selectedCity)}>
            Select City
            </button> */}
                    <Select
                        id="select_city"
                        className="select"
                        options={cities}
                        value={selectedCity}
                        onChange={setSelectedCity}
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                borderRadius: '25px', // change the border-radius to your desired value
                                height: '2.7rem',
                                background: '#1e90ff',
                                border: 'none',
                                width: '10rem',
                            }),
                        }}
                    />
                    <button id="book_now" type="button" onClick={handleModalOpen}>Book Now</button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="cls-m-btn" type="button" onClick={handleModalClose}>X</button>
                        <br />
                        <Modal />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReservationForm;