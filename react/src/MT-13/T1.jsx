import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CobaAxios = () => {
  // State untuk menyimpan data cuaca
  const [weather, setWeather] = useState(null);

  // Effect hook untuk melakukan permintaan GET ke API saat komponen pertama kali dimuat
  useEffect(() => {
    // URL endpoint Open-Meteo API untuk cuaca di London
    const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true";

    // Mengambil data cuaca menggunakan Axios
    axios.get(apiURL)
      .then(response => {
        // Menyimpan data cuaca yang diterima dalam state
        setWeather(response.data.current_weather);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }, []); // Array kosong berarti efek ini hanya dijalankan sekali saat komponen pertama kali dimuat

  // Jika data cuaca belum diterima, tampilkan loading
  if (!weather) {
    return <div>Loading...</div>;
  }

  // Menampilkan data cuaca
  return (
    <div>
      <h1>Cuaca di London</h1>
      <p>Suhu: {weather.temperature}°C</p>
      <p>Kecepatan Angin: {weather.windspeed} km/h</p>
    </div>
  );
};

export default CobaAxios;
