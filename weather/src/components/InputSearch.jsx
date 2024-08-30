import React, { useState } from 'react';

function CitySearch({ onCitySearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onCitySearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Inserisci una città"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" variant='flat'>Cerca</button>
    </form>
  );
}

export default CitySearch;
