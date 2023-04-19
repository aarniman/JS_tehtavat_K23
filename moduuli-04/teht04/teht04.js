'use strict';

const tvSeriesForm = document.querySelector('#tv-series-form');
const divR = document.querySelector("#results")
tvSeriesForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const code = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${code}`);
    const jsonData = await response.json();
    divR.innerHTML = '';
    for(const tv of jsonData){
      const article = document.createElement("article");
      const h2 = document.createElement("h2");
      const name = document.createTextNode(tv.show.name);
      h2.appendChild(name);
      article.appendChild(h2);

      const url = document.createElement("a");
      url.href = tv.show.url;
      url.target = '_blank';

      const unknown = tv.show.image ?
          tv.show.image.medium :
          'https://via.placeholder.com/210x295?text=Not%20Found';

      const img = document.createElement("img");
      img.src = unknown;
      img.alt = tv.show.name;
      url.appendChild(img);
      article.appendChild(url);

      const summary = document.createElement("div");
      summary.innerHTML = tv.show.summary;
      article.appendChild(summary);
      divR.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});