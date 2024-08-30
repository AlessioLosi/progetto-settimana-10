
export async function infoWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c906786fcf8000ed9d78c6205f38333a&units=metric`);

    if (response.ok) {
      console.log('Dati meteo recuperati correttamente');
    }
    const data = await response.json();
    console.log(data)

    return data;
  } catch (error) {
    console.error('Errore:', error);
    return null;
  }
}
