const apiKey = '3f4a304505bdae854c4671f7d518fc4f';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherType = document.querySelector('.fa-cloud-sun-rain');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    const data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + `°C`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;
    document.querySelector('.wind').innerHTML = data.wind.speed + ` km/h`;

    if (data.weather[0].main == 'Clouds') {
      weatherType.classList = 'fa-solid fa-cloud';
    } else if (data.weather[0].main == 'Clear') {
      weatherType.classList = 'fa-solid fa-sun';
    } else if (data.weather[0].main == 'Rain') {
      weatherType.classList = 'fa-solid fa-cloud-rain';
    } else if (data.weather[0].main == 'Dizzle') {
      weatherType.classList = 'fa-solid fa-cloud-sun-rain';
    } else if (data.weather[0].main == 'Mist') {
      weatherType.classList = 'fa-solid fa-cloud-sun';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }
}

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  checkWeather(searchBox.value);
  setTimeout(() => {
    searchBox.value = '';
  }, 400);
});
