document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit");
  const city = document.getElementById("city");
  const cityName = document.getElementById("cityName");
  const temp = document.getElementById("temp");
  const feels_like = document.getElementById("feels_like");
  const humidity = document.getElementById("humidity");
  const min_temp = document.getElementById("min_temp");
  const max_temp = document.getElementById("max_temp");
  const wind_speed = document.getElementById("wind_speed");
  const wind_degrees = document.getElementById("wind_degrees");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");

  // Function to get weather by coordinates
  const getWeatherByCoords = (latitude, longitude) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${latitude}&lon=${longitude}`;
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        cityName.innerHTML = response.city_name;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
  };

  // Options for the API request
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "35491ca99cmshbffb4bbafbabeefp1a990cjsn49d9b0424ed5",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  // Function to get weather by city name
  const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
  };

  // Function to get weather by user's current location
  const getWeatherByLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeatherByCoords(latitude, longitude);
      });
    } else {
      alert("Geolocation is not available in your browser.");
    }
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
  });

  // Ask for permission to access the user's location and fetch weather
  const getLocationButton = document.getElementById("get-location-button");
  getLocationButton.addEventListener("click", () => {
    getWeatherByLocation();
  });

  // Initially, ask for the user's location and fetch weather
  getWeatherByLocation();
});
