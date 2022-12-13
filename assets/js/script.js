// api.giphy.com/v1/gifs/search?q=laugh&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20
// data.images.looping.mp4
// var apiUrl = 'api.giphy.com/v1/gifs/search?q=' + mood + '&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20'

// “Smart” - Documentary
// Drink Pairing: Dark & Stormy, Negroni, Old Fashioned, French 75, Mint Julep
// “Scared” - Horror Movie
// Drink Pairing: Bloody Mary, Boiler Maker, Corpse Reviver No.2, Cuba Libre, Grasshopper
// “Investigative” - True Crime
// Drink Pairing: Sidecar, Blue Motorcycle, Bellini, Black & Tan, Gin Fizz
// “Laugh” - Comedies
// Drink Pairing: Mojito, Pimm’s cup, Tom Collins, Daiquiri, Bahama Mama
// “Dramatic” - Dramas
// Drink Pairing: Dirty Martini, Alabama Slammer, Caipirinha, Fuzzy Navel, Greyhound
// “Young love” - Romance/RomCom
// Drink Pairing: Cosmo, Midori Sour, Sex on the Beach, Mai Tai, Pina Colada
// “Explosion” - Action Movies
// Drink Pairing: Vesper, Aviator, Alabama Slammer, White Russian, Irish Carbomb, Kamikaze
// “Yeehaw agenda” - Westerns
// Drink Pairing: Whiskey Sour, Paloma, Cement Mixer, Long Island Iced Tea, Lynchburg Lemonade, Mudslide
// “Psychological thriller” - Thrillers
// Drink Pairing: Moscow Mule, Sazerac, Boulevardier, Gimlet, Mind Eraser
// “Family” - Feel-good Movies
// Drink Pairing: Mojito, Margarita, Aperol Spritz, Mimosa, Hot Toddy
// giphy api key FsySzgOBYv5zqlKccJT94Jx4XGUmM90i

var gifBtns = document.querySelectorAll('.gifBtn');
var container = document.querySelector('.container');
var documentaryApiUrl = 'https://api.giphy.com/v1/gifs/search?q=research&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20'
var horrorApiUrl = 'https://api.giphy.com/v1/gifs/search?q=terrifying&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var crimeApiUrl = 'https://api.giphy.com/v1/gifs/search?q=detective&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var comedyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=laugh&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var dramaApiUrl = 'https://api.giphy.com/v1/gifs/search?q=dramatic&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var romanceApiUrl = 'https://api.giphy.com/v1/gifs/search?q=young_love&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var actionApiUrl = 'https://api.giphy.com/v1/gifs/search?q=explosion&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var westernApiUrl = 'https://api.giphy.com/v1/gifs/search?q=western&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var thrillerApiUrl = 'https://api.giphy.com/v1/gifs/search?q=anxious&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';
var familyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=family&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20';

var requestUrls = [documentaryApiUrl, horrorApiUrl, crimeApiUrl, comedyApiUrl, dramaApiUrl, romanceApiUrl, actionApiUrl, westernApiUrl, thrillerApiUrl, familyApiUrl];
// container.addEventListener('click', function(event){
// var element = event.target;
// if (element.matches('.gifBtn')){

// }
// });
var gifImgEls = document.querySelectorAll('.gifBtn img');
var fetchGif = function (requestUrl, btnNum) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.data[Math.floor(Math.random() * 10)].images.downsized.url);
            gifImgEls[btnNum].setAttribute('src', data.data[Math.floor(Math.random() * 5)].images.fixed_width_downsampled
                .url);
        })
        .catch(function (error) {
            console.log(error);
        });
}

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

