const countries = document.querySelector('.countries-container')


let api = "https://restcountries.com/v3.1/all"

fetch(api)
  .then((data) => {
    return data.json();
  })
  .then(getData);


  function getData(data) {
      data.forEach((country) => {
          console.log(country.flag.png)
          console.log(country.name.common)
          console.log(country.population)


          const div = document.createElement('div')
          div.classList.add('counter-content')
          div.innerHTML = `
         
          <img src=${country.flags.png} alt="" class="counter-img" width="265" height="160"  />
          <h3 class="counter-name">${country.name.common}</h3>
          <p class="counter-text">
            Population: <span class="counter-span">${country.population}</span>
          </p>
          <p class="counter-text">
            Region: <span class="counter-span"> ${country.region} </span>
          </p>
          <p class="counter-text counter-text-bottom">
            Capital: <span class="counter-span"> ${country.capital ? country.capital[0] : 'No Capital'}</span>
          </p>
        
          `

          countries.appendChild(div)
      })
  
  }