var gifBtns = document.querySelectorAll('.gifBtn');
var container = document.querySelector('.container');
var dataIndex = [];
var documentaryApiUrl = 'https://api.giphy.com/v1/gifs/search?q=research&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20'
var horrorApiUrl = 'https://api.giphy.com/v1/gifs/search?q=terrifying&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var crimeApiUrl = 'https://api.giphy.com/v1/gifs/search?q=detective&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var comedyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=laugh&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var dramaApiUrl = 'https://api.giphy.com/v1/gifs/search?q=dramatic&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var romanceApiUrl = 'https://api.giphy.com/v1/gifs/search?q=young-love&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var actionApiUrl = 'https://api.giphy.com/v1/gifs/search?q=explosion&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var westernApiUrl = 'https://api.giphy.com/v1/gifs/search?q=western&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var thrillerApiUrl = 'https://api.giphy.com/v1/gifs/search?q=anxious&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var familyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=family&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var requestUrls = [documentaryApiUrl, horrorApiUrl, crimeApiUrl, comedyApiUrl, dramaApiUrl, romanceApiUrl, actionApiUrl, westernApiUrl, thrillerApiUrl, familyApiUrl];
container.addEventListener('click', function (event) {
  var element = event.target;
  if (element.matches('.gifBtn img')) {
    var indexPos = element.dataset.index;
    localStorage.setItem('data-index', indexPos);
    window.location = './results.html';
  }



});
var gifImgEls = document.querySelectorAll('.gifBtn img');
var fetchGif = function (requestUrl, btnNum) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      gifImgEls[btnNum].src = data.data[Math.floor(Math.random() * 7)].images.fixed_width_downsampled
        .url;
    })
    .catch(function (error) {
      console.log(error);
    });
};

fetchGif(documentaryApiUrl, 0);
fetchGif(horrorApiUrl, 1);
fetchGif(crimeApiUrl, 2);
fetchGif(comedyApiUrl, 3);
fetchGif(dramaApiUrl, 4);
fetchGif(romanceApiUrl, 5);
fetchGif(actionApiUrl, 6);
fetchGif(westernApiUrl, 7);
fetchGif(thrillerApiUrl, 8);
fetchGif(familyApiUrl, 9);

var prevPairings = JSON.parse(localStorage.getItem('pairing'));
var displayPrevSearch = function () {
  if (prevPairings !== null) {
    for (var pair of prevPairings) {
      prevPair = document.createElement('p');
      prevPair.textContent = pair;
      document.getElementById('aside').appendChild(prevPair);
    }
  }
};
displayPrevSearch();

container.addEventListener('click', function (event) {
  var element = event.target;
  if (element.matches('.gifBtn img')) {
    var indexPos = element.dataset.index;
    // dataIndex.push(indexPos);
    localStorage.setItem('data-index', indexPos);
    window.location = './results.html';
  }
});

