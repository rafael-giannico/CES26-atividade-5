import React, { useState } from 'react';
import CityDetail from './CityDetail';
import './styles.css';

const cities = ["Tremembé", "Taubaté", "São José dos Campos", "São Paulo"];

function CityList() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <ul>
        {cities.map(city => (
          <li
            key={city}
            onClick={() => setSelectedCity(city)}
            className={city === selectedCity ? 'expanded' : ''}
          >
            {city}
          </li>
        ))}
      </ul>
      {selectedCity && (
        <CityDetail city={selectedCity} onClose={() => setSelectedCity(null)} />
      )}
    </div>
  );
}

export default CityList;