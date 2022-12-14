var gifBtns = document.querySelectorAll('.gifBtn');
var container = document.querySelector('.container');
var movieContainer = document.querySelector(".movieContainer");
var cardInfo = document.getElementById('drinks');
var documentaries = ["The Rescue", "March of the Penguins", "Our Father", "Free Solo", "Fire of Love", "The Band", "Won't You Be My Neighbor", "Woodstock ...the movie", "Icarus", "Puping Iron", "The Cove", "Pele", "Apollo 11", "The Central Park Five", "Leaving Neverland", "Fyre", "Quincy", "The Thin Blue Line", "Zeitgeist The Movie", "Man On Wire", "The Salt of the Earth"];

var horrorMovies = ["Smile", "Us", "Hereditary", "A Quiet Place", "It", "Get Out", "Scream", "Monster House", "Cabin in the Woods", "Let the Right One In", "Hellraiser", "The Invitation", "The Blair Witch Project", "Backcountry", "Krampus", "It Comes At Night", "The Mist", "Old", "The Ring", "The Thing"];

var trueCrimeMovies = ["Zodiac", "The Hillside Strangler", "The Alphabet Killer", "Henry: Portrait of a Serial Killer", "The Secret Life: Jeffrey Dahmer", "To Catch a Killer", "The Deliberate Stranger", "The Hunt for the BTK Killer", "Monster", "The Riverman", "Dear Mr. Gacy","8213: Gacy House", "10 Rillington Place", "The Capture of the Green River Killer", "The Atlanta Child Murders", "Citizen X", "The Boston Strangler", "Badlands", "In Cold Blood", "Helter Skelter", "Polytechnique"];

var comedies = ["The General", "Duck Soup", "It Happened One Night", "Wedding Crashers", "Anchorman:The Legend of Ron Burgundy", "Walk Hard: The Dewey Cox Story", "The Hangover", "Office Space", "Dumb and Dumber", "Austin Powers: International Man of Mystery", "Old School","Bedazzled", "Analyze This", "Midnight Run", "The Jerk", "Liar Liar", "Forgetting Sarah Marshall", "The 40-Year-Old Virgin", "Swingers","Borat", "The Heat", "Superbad", "We're the Millers", "Bridesmaids"];

var dramas = ["12 Years a Slave", "A Star Is Born", "A Streetcar Named Desire", "Almost Famous", "Animal Kingdom", "Atonement", "Beautiful Boy", "Before Sunrise", "Billy Elliot", "Boys Don\’t Cry", "Children of Men", "Daughters of the Dust", "Dunkirk", "Eternal Sunshine of the Spotless Mind", "Fences", "Gladiator", "Gone Girl", "Good Will Hunting", "Her", "Hidden Figures"];

var romanceMovies = ["When Harry Met Sally", "Love Simon", "Always Be My Maybe", "Say Anything", "Straight Up", "Sleepless In Seattle", "How to Lose a Guy in 10 Days", "To All the Boys I\’ve Loved Before", "Sixteen Candles", "Silver Linings Playbook", "Groundhog Day", "Bridget Jone\’s Diary", "The Big Sick", "The Incredible", "Jessica James", "Love Actually", "Pretty Woman", "Mamma Mia", "13 Going on 30", "The Wedding Singer", "Notting Hill", "Just Go With It", "The Proposal", "27 Dresses", "10 Things I Hate About You", "My Big Fat Greek Wedding"];

var actionMovies = ["The Bourne Ultimatum", "Mission Impossible - Rogue Nation", "John Wick", "Enter the Dragon", "House of Flying Daggers", "Mad Max: Fury Road", "The Terminator", "Men in Black", "Die Hard", "Casino Royale", "Inside Man", "The Dark Knight", "Raiders of the Lost Ark", "Avengers: Endgame", "The Lord of the Rings: The Two Towers", "Everything Everywhere All at Once", "Aliens", "Police Story", "Kill Bill", "The Matrix", "Lethal Weapon", "Rambo", "Point Break", "Skyfall", "Inception"];

var feelGoodMovies = ["The Parent Trap", "Spirited Away", "Ratatouille", "Hunt for the Wilderpeople", "Captain Fantastic", "Stand By Me", "Grand Budapest Hotel", "Uptown Girls", "The Terminal", "Clueless", "The Princess Diaries", "Little Miss Sunshine", "The Breakfast Club", "Fantastic Mr. Fox", "Amélie", "Dennis The Menace", "Little Rascals", "Groundhog Day", "The Incredibles", "Jumanji", "The Wizard of Oz", "The Sound of Music"];

var thrillers = ["Gone Girl", "The Invisible Man", "Woman in the Window", "The Butterfly Effect", "Enough", "The Stranger", "Black Swan", "Shutter Island, Parasite", "The Girl on the Train", "Fractured", "Prisoners", "Inception", "Zodiac", "The Invitation", "Nocturnal Animals", "The Gift", "Nightcrawler", "The Machinist", "Mulholland Drive", "The Shining", "Cape Fear"];

var westerns = ["The Power of the Dog", "Hell or High Water", "Tombstone", "The Hateful Eight", "The Salvation", "Blackthorn", "The Magnificent Seven", "Dead Man", "The Horse Whisperer", "The Keeping Room", "In a Valley of Violence", "Silverado", "The Ballad of Lefty Brown", "Red Hill", "Hostiles", "Appaloosa", "Open Range", "El Topo", "The Long Riders", "Hud", "The Homesman", "How the West Was Won"];

var smart = ["Dark & Stormy", "Negroni", "Old Fashioned", "French 75", "Mint Julep"];
var scared = ["Bloody Mary", "BoilerMaker", "Corpse Reviver", "Cuba Libra", "Grasshopper"];
var investigative = ["Sidecar", "Blue Lagoon", "Bellini", "Black & Tan", "Gin Fizz"];
var laugh = ["Mojito", "Pimm's Cup", "Tom Collins", "Daiquiri", "Bahama Mama"];
var dramatic = ["Dirty Martini", "Alabama Slammer", "Caipirinha", "Fuzzy Navel", "Greyhound"];
var youngLove = ["Cosmo", "Midori Sour", "Sex on the Beach", "Mai Tai", "Pina Colada"];
var explosion = ["Vesper", "Espresso Martini", "Alabama Slammer", "White Russian", "Penicillin", "Kamikaze"];
var family = ["Mojito", "Margarita", "Aperol Spritz", "Mimosa", "Hot Toddy"];
var thriller = ["Moscow Mule", "Sazerac", "Boulevardier", "Gimlet", "Mind Eraser"];
var yeehaw = ["Whiskey Sour", "Polama", "Cement Mixer", "Long Island Iced Tea", "Lynchburg Lemonade", "Mudslide"];

var i = 4
// var search = investigative[1]  
// ---this is a tester for broken searches
// scared, investigative all good


var drinkFetch = function () {
  for (var j = 0; j < 3; j++) {

    var drinks = [smart, scared, investigative, laugh, dramatic, youngLove, explosion, family, thriller, yeehaw,];


    var search = drinks[i][Math.floor(Math.random() * drinks[i].length)];

    requestURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search;


    var fillCards = function (name, picture, mainIngred, instructions) {

      console.log(name);
      console.log(picture);
      console.log(mainIngred);
      console.log(instructions);

      var cardDiv1 = document.createElement('div');
      cardDiv1.className = "card mb-3";
      cardDiv1.setAttribute('style', 'max-width: 540px');

      var cardDiv2 = document.createElement('div');
      cardDiv2.className = 'row g-0';
            var cardDiv2 = document.createElement('div');
            cardDiv2.className = 'row g-0';

      var cardDiv3 = document.createElement('div');
      cardDiv3.className = 'col-md-4';

      var cardPicture = document.createElement('img');
      cardPicture.setAttribute('src', picture);
      cardPicture.setAttribute('style', 'max-width: 100%');
            var cardDiv3 = document.createElement('div');
            cardDiv3.className = 'col-md-4';          
            
            var cardPicture = document.createElement('img');
            cardPicture.setAttribute('src', picture);
            cardPicture.setAttribute('style', 'max-width: 100%');


      var cardDiv4 = document.createElement('div');
      cardDiv4.className = 'col-md-8';

      var cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      var cardName = document.createElement('h5');
      cardName.className = 'card-title';
      cardName.textContent = name;

      var cardinstructions = document.createElement('p');
      cardinstructions.className = 'card-text';
      cardinstructions.textContent = instructions;
            
            var cardDiv4 = document.createElement('div');
            cardDiv4.className = 'col-md-8';    
            
            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            
            var cardName = document.createElement('h5');
            cardName.className = 'card-title';
            cardName.textContent = name;
            
            var cardinstructions = document.createElement('p');
            cardinstructions.className = 'card-text';
            cardinstructions.textContent = instructions;

      var cardingred = document.createElement('p');
      cardingred.className = 'card-text';
      cardingred.textContent = mainIngred;
            var cardingred = document.createElement('p');
            cardingred.className = 'card-text';
            cardingred.textContent = mainIngred;

      cardInfo.appendChild(cardDiv1);
      cardDiv1.appendChild(cardDiv2);
      cardDiv2.appendChild(cardDiv3);
      cardDiv2.appendChild(cardDiv4);
      cardDiv3.appendChild(cardPicture);
      cardDiv4.appendChild(cardBody);
      cardBody.append(cardName, cardinstructions, cardingred);
            cardInfo.appendChild(cardDiv1);
            cardDiv1.appendChild(cardDiv2);
            cardDiv2.appendChild(cardDiv3);
            cardDiv2.appendChild(cardDiv4);
            cardDiv3.appendChild(cardPicture);
            cardDiv4.appendChild(cardBody);
            cardBody.append(cardName, cardinstructions, cardingred);


    }
    }

    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {

        fillCards(data.drinks[0].strDrink, data.drinks[0].strDrinkThumb, data.drinks[0].strIngredient1, data.drinks[0].strInstructions);
      })
      .catch(function (error) {
        console.log(error);
      });
            fillCards(data.drinks[0].strDrink, data.drinks[0].strDrinkThumb, data.drinks[0].strIngredient1, data.drinks[0].strInstructions);
        })
        .catch(function(error) {
            console.log(error);
        });

}}

  }
};
drinkFetch();

// api.giphy.com/v1/gifs/search?q=laugh&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20
// data.images.looping.mp4
// var apiUrl = 'api.giphy.com/v1/gifs/search?q=' + mood + '&api_key=FsySzgOBYv5zqlKccJT94Jx4XGUmM90i&rating=pg&limit=20'

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

var movies = [documentaries, horrorMovies, trueCrimeMovies, comedies, dramas, romanceMovies, actionMovies, feelGoodMovies, thrillers, westerns];


var searchMovies = movies[i][Math.floor(Math.random() * movies[i].length)];

var movieUrl = "http://www.omdbapi.com/?apikey=88ff8839&t=" + searchMovies;

fetch(movieUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    fillMovieCard(data);
  })
  .catch(function (error) {
    console.log(error);
  });

var fillMovieCard = function (data) {
  // MOVIE CARD ELEMENT
  var movieCardEl = document.createElement("div");
  movieCardEl.className = "card p-5";
  // MOVIE CARD IMG
  var movieCardImg = document.createElement("img");
  movieCardImg.className = "card-img-top";
  movieCardImg.src = data.Poster
  movieCardImg.setAttribute("style", "max-width: 75%");
  // MOVIE CARD BODY
  var movieCardBody = document.createElement("div");
  movieCardBody.className = "card-body";
  // MOVIE CARD TITLE
  var movieCardTitle = document.createElement("h5");
  movieCardTitle.className = "card-title";
  movieCardTitle.textContent = data.Title;
  // MOVIE CARD DESCRIPTION
  var movieCardPLot = document.createElement("p");
  movieCardPLot.className = "card-text";
  movieCardPLot.textContent = data.Plot;
  // MOVIE CARD RATING
  var movieCardRating = document.createElement("p");
  movieCardRating.className = "card-text";
  movieCardRating.textContent = ("Movie Rating: " + "\uD83C\uDF45 " + data.Ratings[1].Value);

  // APPEND ELEMENT TO PAGE
  movieContainer.appendChild(movieCardEl);
  movieCardEl.appendChild(movieCardImg);
  movieCardEl.appendChild(movieCardBody);
  movieCardBody.append(movieCardTitle, movieCardPLot, movieCardRating);
  
};

