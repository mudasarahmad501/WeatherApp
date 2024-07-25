const inputBox = document.querySelector('.inputbox');
const searchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const Weather_body = document.querySelector('.Weather-body');


async function checkWeather(city){
    const api_key = "01b8494247d5858a7d5aece632f2a3e9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    // inputBox.value.to !== `${weather_data.name}
    if(weather_data.cod === `400`){
        location_not_found.style.display = "flex";
        Weather_body.style.display = "none";
        console.log(error);
        return;
    }else{
        location_not_found.style.display = "none";
        Weather_body.style.display = "flex";
    }
        
    
    
    // console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} <sup>°C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity} %`;
    wind.innerHTML = `${weather_data.wind.speed} km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})