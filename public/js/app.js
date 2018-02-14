const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=c685e23f34b74c619a0895e03bf08727`;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  fetch(url)
    .then(function (response) {
      return response.json();
      getJson();
    }).then(function (data) {
      console.log(data);
      addNews(data);
    })
    .catch(function (error) {
      handleError();
    });
});

function getJson() {
  const data = JSON.parse(this.responseText);
  addNews(data);
}

function addNews(data) {
  const articles = data.response.docs;
  for (let index in articles) {
    console.log(articles[index]);
    var dataComplete = articles[index];
    console.log(dataComplete);
    let title = dataComplete.headline.main;
    let snippet = dataComplete.snippet;
    let li = document.createElement('li');
    li.className = 'li';
    li.innerHTML = snippet;
    responseContainer.appendChild(li);
  }
};

function handleError() {
  console.log('Se ha presentado un error');
}