import React, { useEffect, useState } from 'react';

function CityDetail({ city, onClose }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/city/${city}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [city]);

  return (
    <div>
      <button onClick={onClose}>Close</button>
      {data && (
        <div>
          <img src={data.image} alt={`${city}`} />
          <p>{data.description}</p>
          <p>Population: {data.population}</p>
          <p>Main Economic Activity: {data.mainEconomicActivity}</p>
          <p>Size: {data.size}</p>
        </div>
      )}
    </div>
  );
}

export default CityDetail;
