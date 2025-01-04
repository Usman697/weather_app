let cityName = "";
let humidity = "";
let temperature = "";
let wind = "";
let main = "";

function getData() {
  cityName = document.querySelector("input").value;

  const url = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2b5836b308fdcba95fbc76e90a4973dc&units=metric`)
    .then((res) => res.json())//.then((data) => console.log(data))
    .then((data) => {
      document.getElementById("first").classList.add('d-none');
      document.getElementById("second").classList.remove('d-none');
      console.log(data)
      main = data.weather[0].description;
      temperature = data.main.temp;
      temperature = Math.round(temperature)
      humidity = data.main.humidity;
      wind = data.wind.speed;
      wind = Math.round(wind)
      document.getElementById("weather_condition").innerHTML = `${cityName} weather condition : ${main}`;
      document.getElementById("temp").innerHTML = `${temperature}°C`;
      document.getElementById("humidity").innerHTML = `${humidity}%`;
      document.getElementById("wind").innerHTML = `${wind} Km/h `;

      console.log(main)
      console.log(temperature)
      console.log(humidity)
      console.log(wind)

      if (main === 'clear sky') {
        document.getElementById("second").style = `background-image: url('images/clear sky.gif')`
      }
      else if (main === 'few clouds') {
        document.getElementById("second").style = `background-image: url('images/few clouds.gif')`
      }
      else if (main === 'haze') {
        document.getElementById("second").style = `background-image: url('images/50d.gif')`
      }
      else if (main === 'scattered clouds') {
        document.getElementById("second").style = `background-image: url('images/scattered-clouds.gif')`
      }
      else if (main === 'broken clouds') {
        document.getElementById("second").style = `background-image: url('images/few clouds.gif')`
      }
      else if (main === 'shower rain') {
        document.getElementById("second").style = `background-image: url('images/shower rain 2.webp')`
      }
      else if (main === 'rain') {
        document.getElementById("second").style = `background-image: url('images/shower rain.gif')`
      }
      else if (main === 'thunderstorm') {
        document.getElementById("second").style = `background-image: url('images/thunderstorm.gif')`
      }
      else if (main === 'snow') {
        document.getElementById("second").style = `background-image: url('images/snow.gif')`
      }
      else if (main === 'mist') {
        document.getElementById("second").style = `background-image: url('images/mist.gif')`
      }
      else if (main === 'overcast clouds') {
        document.getElementById("second").style = `background-image: url('images/overcast.gif')`
      }
      else if (main === 'light rain' || main === 'moderate rain') {
        document.getElementById("second").style = `background-image: url('images/shower rain 2.webp')`
      }
    })
    .catch((error) => {
      alert("please enter correct city name");
      document.getElementById("first").classList.remove('d-none');
      document.getElementById("second").classList.add('d-none');
      // handle error
      console.log(error);
    })
}
function goBack() {
  document.getElementById("first").classList.remove('d-none');
  document.getElementById("second").classList.add('d-none');
  cityName = document.getElementById("input").value = '';

}