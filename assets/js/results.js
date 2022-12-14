var movieContainer = document.querySelector(".movieContainer");
var cardInfo = document.getElementById("drinks");
var replayBtn = document.querySelector("#replay");
var movieTitle = "";
var documentaries = ["The Rescue", "March of the Penguins", "Our Father", "Free Solo", "Fire of Love", "The Band", "Won't You Be My Neighbor", "Icarus", "Pumping Iron", "The Cove", "Pele", "Apollo 11", "The Central Park Five", "Leaving Neverland", "Fyre", "Quincy", "The Thin Blue Line", "Zeitgeist", "Man On Wire", "The Salt of the Earth"];
var horrorMovies = ["Smile", "Us", "Hereditary", "A Quiet Place", "It", "Get Out", "Scream", "Monster House", "Cabin in the Woods", "Let the Right One In", "Hellraiser", "The Invitation", "The Blair Witch Project", "Backcountry", "Krampus", "It Comes At Night", "The Mist", "Old", "The Ring", "The Thing"];
var trueCrimeMovies = ["Zodiac", "The Hillside Strangler", "The Alphabet Killer", "Henry: Portrait of a Serial Killer", "The Secret Life: Jeffrey Dahmer", "To Catch a Killer", "The Deliberate Stranger", "The Hunt for the BTK Killer", "Monster", "The Riverman", "Dear Mr. Gacy", "8213: Gacy House", "10 Rillington Place", "The Capture of the Green River Killer", "The Atlanta Child Murders", "Citizen X", "The Boston Strangler", "Badlands", "In Cold Blood", "Helter Skelter", "Polytechnique"];
var comedies = ["The General", "Duck Soup", "It Happened One Night", "Wedding Crashers", "Anchorman:The Legend of Ron Burgundy", "Walk Hard: The Dewey Cox Story", "The Hangover", "Office Space", "Dumb and Dumber", "Austin Powers: International Man of Mystery", "Old School", "Bedazzled", "Analyze This", "Midnight Run", "The Jerk", "Liar Liar", "Forgetting Sarah Marshall", "The 40-Year-Old Virgin", "Swingers", "Borat", "The Heat", "Superbad", "We're the Millers", "Bridesmaids"];
var dramas = ["12 Years a Slave", "A Star Is Born", "A Streetcar Named Desire", "Almost Famous", "Animal Kingdom", "Atonement", "Beautiful Boy", "Before Sunrise", "Billy Elliot", "Children of Men", "Daughters of the Dust", "Dunkirk", "Eternal Sunshine of the Spotless Mind", "Fences", "Gladiator", "Gone Girl", "Good Will Hunting", "Her", "Hidden Figures"];
var romanceMovies = ["When Harry Met Sally", "Love Simon", "Always Be My Maybe", "Say Anything", "Straight Up", "Sleepless In Seattle", "How to Lose a Guy in 10 Days", "Sixteen Candles", "Silver Linings Playbook", "Groundhog Day", "The Big Sick", "The Incredible", "Jessica James", "Love Actually", "Pretty Woman", "Mamma Mia", "13 Going on 30", "The Wedding Singer", "Notting Hill", "Just Go With It", "The Proposal", "27 Dresses", "10 Things I Hate About You", "My Big Fat Greek Wedding"];
var actionMovies = ["The Bourne Ultimatum", "Mission Impossible - Rogue Nation", "John Wick", "Enter the Dragon", "House of Flying Daggers", "Mad Max: Fury Road", "The Terminator", "Men in Black", "Die Hard", "Casino Royale", "Inside Man", "The Dark Knight", "Raiders of the Lost Ark", "Avengers: Endgame", "The Lord of the Rings: The Two Towers", "Everything Everywhere All at Once", "Aliens", "Police Story", "Kill Bill", "The Matrix", "Lethal Weapon", "Rambo", "Point Break", "Skyfall", "Inception"];
var feelGoodMovies = ["The Parent Trap", "Spirited Away", "Ratatouille", "Hunt for the Wilderpeople", "Captain Fantastic", "Stand By Me", "Grand Budapest Hotel", "Uptown Girls", "The Terminal", "Clueless", "The Princess Diaries", "Little Miss Sunshine", "The Breakfast Club", "Fantastic Mr. Fox", "Am??lie", "Dennis The Menace", "Little Rascals", "Groundhog Day", "The Incredibles", "Jumanji", "The Wizard of Oz", "The Sound of Music"];
var thrillers = ["Gone Girl", "The Invisible Man", "Woman in the Window", "The Butterfly Effect", "Enough", "The Stranger", "Black Swan", "Shutter Island", "Parasite", "The Girl on the Train", "Fractured", "Prisoners", "Inception", "Zodiac", "The Invitation", "Nocturnal Animals", "The Gift", "Nightcrawler", "The Machinist", "Mulholland Drive", "The Shining", "Cape Fear"];
var westerns = ["The Power of the Dog", "Hell or High Water", "Tombstone", "The Hateful Eight", "The Salvation", "Blackthorn", "The Magnificent Seven", "Dead Man", "The Horse Whisperer", "The Keeping Room", "In a Valley of Violence", "Silverado", "The Ballad of Lefty Brown", "Red Hill", "Hostiles", "Appaloosa", "Open Range", "El Topo", "The Long Riders", "Hud", "The Homesman", "How the West Was Won"];

var smart = ["Dark and Stormy", "Negroni", "Old Fashioned", "French 75", "Mint Julep", "singapore sling"];
var scared = ["Bloody Mary", "BoilerMaker", "Corpse Reviver", "Cuba Libra", "Grasshopper", "gin rickey"];
var investigative = ["Sidecar", "Blue Lagoon", "Bellini", "Black & Tan", "Gin Fizz", "brooklyn"];
var laugh = ["Mojito", "rum punch", "Tom Collins", "Daiquiri", "Bahama Mama", "rum sour", "pisco sour"];
var dramatic = ["Dirty Martini", "Alabama Slammer", "Caipirinha", "Clover Club", "Greyhound", "godfather"];
var youngLove = ["Cosmo", "Sex on the Beach", "Mai Tai", "Pina Colada", "between the sheets", "vermouth cassis"];
var explosion = ["Vesper", "Espresso Martini", "Alabama Slammer", "White Russian", "Penicillin", "Kamikaze", "planters punch"];
var family = ["Mojito", "Margarita", "Aperol Spritz", "Mimosa", "Hot Toddy", "frozen", "irish coffee"];
var thriller = ["Moscow Mule", "Sazerac", "Boulevardier", "Gimlet", "snowball", "hurricane", "americano"];
var yeehaw = ["Whiskey Sour", "Long Island Iced Tea", "Mudslide", "tequila sunrise", "mint julep", "martinez 2", "amaretto sour"];

var drinksArr = [smart, scared, investigative, laugh, dramatic, youngLove, explosion, family, thriller, yeehaw,];

var index = parseInt(localStorage.getItem("data-index"));

//using the Durstenfeld shuffle algorithm
var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};


var drinkFetch = function () {
    var index = parseInt(localStorage.getItem("data-index"));
    shuffleArray(drinksArr[index]);
    for (var i = 0; i < 3; i++) {
        var search = drinksArr[index][i];

        var requestURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search;


        var fillCards = function (name, picture, mainIngred, instructions, mainIngred2, mainIngred3) {

            var cardDiv1 = document.createElement("div");
            cardDiv1.className = "card mb-3 bg-light";
            cardDiv1.setAttribute("style", "max-width: 540px");

            var cardDiv2 = document.createElement("div");
            cardDiv2.className = "row g-0";

            var cardDiv3 = document.createElement("div");
            cardDiv3.className = "col-md-4";

            var cardPicture = document.createElement("img");
            cardPicture.setAttribute("src", picture);
            cardPicture.className = "m-1";
            cardPicture.setAttribute("style", "max-width: 90%");

            var cardButton = document.createElement("button");
            cardButton.className = ("btn m-1 text-light bg-success drinkBtn");
            cardButton.textContent = "Click to Save";
            cardButton.setAttribute("data-name", name);

            var cardDiv4 = document.createElement("div");
            cardDiv4.className = "col-md-8";

            var cardBody = document.createElement("div");
            cardBody.className = "card-body";

            var cardName = document.createElement("h5");
            cardName.className = "card-title";
            cardName.textContent = name;

            var cardinstructions = document.createElement("p");
            cardinstructions.className = "card-text";
            cardinstructions.textContent = instructions;

            var cardingred = document.createElement("p");
            cardingred.className = "card-text";
            cardingred.textContent = mainIngred + ", " + mainIngred2 + ", " + mainIngred3;

            cardInfo.appendChild(cardDiv1);
            cardDiv1.appendChild(cardDiv2);
            cardDiv2.appendChild(cardDiv3);
            cardDiv2.appendChild(cardDiv4);
            cardDiv3.append(cardPicture, cardButton);
            cardDiv4.appendChild(cardBody);
            cardBody.append(cardName, cardinstructions, cardingred);
        }

        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                fillCards(data.drinks[0].strDrink, data.drinks[0].strDrinkThumb, data.drinks[0].strIngredient1, data.drinks[0].strInstructions, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
};

var movieFetch = function () {
    var movies = [documentaries, horrorMovies, trueCrimeMovies, comedies, dramas, romanceMovies, actionMovies, feelGoodMovies, thrillers, westerns];
    var searchMovies = movies[index][Math.floor(Math.random() * movies[index].length)];

    var movieUrl = "https://www.omdbapi.com/?apikey=88ff8839&t=" + searchMovies;

    fetch(movieUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
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

        movieTitle = data.Title; // SETS MOVIE TITLE
    }
};

document.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".drinkBtn")) {
        event.preventDefault();
        var pairings = JSON.parse(localStorage.getItem("pairings")) || [];
        pairings.push(movieTitle + "-" + element.dataset.name);
        localStorage.setItem("pairings", JSON.stringify(pairings));
    }
});

drinkFetch();
movieFetch();
