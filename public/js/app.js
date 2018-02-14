// alert('Hola mundo desde mi server');
const btn = document.querySelector("button");
const priceSpan = document.querySelector("#price");
let currency = 'EUR';
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

btn.addEventListener('click', function () {
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json()
    }).then(function (data) {
      console.log(data.bpi[currency].rate);
      priceSpan.innerText = data.bpi[currency].rate + currency;
    })
    .catch(function (error) {
      console.log(error);
    })
  /*   fetch(url)
     .then(function(response){
         console.log(response);
         return response.json().then(function(data){
             console.log(data);
         })
     })
     .catch(function(error){
         console.log(error);
     }) */
})
/* fetch(url)
    .then(function(response){
        console.log(response);
        console.log(response.json());
    }) */