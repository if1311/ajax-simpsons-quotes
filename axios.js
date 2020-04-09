function fetchSimpsonsQuotesJSON() {
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data[0];
    })
    .then(function (quotes) {
      // Build a block of HTML
      const quotesHtml = `
          <h4><strong>${quotes.character}</strong></h4>
          <img src="${quotes.image}" />
          <p>${quotes.quote}</p>
        `;
      document.querySelector("#chuck-norris").innerHTML = quotesHtml;
    });
}

fetchSimpsonsQuotesJSON();
