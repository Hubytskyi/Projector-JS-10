'use strict';

// api - https://openweathermap.org/
// url for icons - https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/

const iconsMap = {
  '01n': 'https://someurl'
}

const form = document.querySelector('form');
const input = document.querySelector('input');
const msg = document.querySelector('.msg');
const cities = document.querySelector('.cities');

const findedCities = [];

const API_KEY = '742d340226f94c6ad754526df79b475f';

function renderCity(cityData) {
 // const main = cityData.main;
 const { main, sys, weather, name } = cityData;

 if (findedCities.includes(name.toLowerCase())) {
   msg.innerHTML = `You already know the weather for ${name}`;

   return null;
 }

 // iconsMap[weather[0]['icon']]
 const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;

 const li = document.createElement('li');
 li.classList.add('city');
 
 const markup = `
   <h2 class="city-name">
     <span>${name}</span>
     <sup>${sys.country}</sup>
   </h2>
   <div class="city-temp">${Math.round(main.temp)}</div>
   <img class="city-icon" src="${icon}" alt="${name}"/>
   <span>${weather[0]['description']}</span>
 `;

 li.innerHTML = markup;
 cities.appendChild(li);

 findedCities.push(name.toLowerCase());
}

function fetchWeather(event) {
  event.preventDefault();
  const inputValue = input.value;

  if (inputValue.trim() === '') {
    input.focus()

    return null;
  }

  if (findedCities.includes(inputValue.toLowerCase())) {
    msg.innerHTML = `You already know the weather for ${inputValue}`;

    return null;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`)
  .then((response) => {
    console.log(response)
    if (!response.ok) {
      throw new Error('Something went wrong')
    } 

    return response.json();
  })
  .then(renderCity)
  .catch((e) => {
    msg.innerHTML = e.message;
  })
  .finally(() => {
    form.reset();
    input.focus();
  })
}

async function fetchWeather2(event) {
  event.preventDefault();
  const inputValue = input.value;

  if (inputValue.trim() === '') {
    input.focus()

    return null;
  }

  if (findedCities.includes(inputValue.toLowerCase())) {
    msg.innerHTML = `You already know the weather for ${inputValue}`;

    return null;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('Something went wrong')
    } 

    const cityData = await response.json();
    renderCity(cityData);

  } catch(e) {
    msg.innerHTML = e.message;
  } finally {
    form.reset();
    input.focus();
  }

}

form.addEventListener('submit', fetchWeather2);
