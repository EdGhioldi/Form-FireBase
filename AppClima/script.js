let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '376fa21a88c2568f03652cd696df9533';
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener(click, () => {
    const ciudad = getElementById('ciudadEntreada').value;
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => console.log(response))
}

