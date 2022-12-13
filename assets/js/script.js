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

var movies = [documentaries, horrorMovies, trueCrimeMovies, comedies, dramas, romanceMovies, actionMovies, feelGoodMovies, thrillers, westerns];

i = 5;

var searchMovies = movies[i][Math.floor(Math.random() * movies[i].length)];

var movieUrl = "http://www.omdbapi.com/?apikey=88ff8839&t=" + searchMovies;

fetch(movieUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var movieName = data.Title;
    var movieImage = data.Poster;
    var moviePlot = data.Plot;
    var movieActors = data.Actors;

    console.log(movieName);
    console.log(movieImage);
    console.log(moviePlot);
    console.log(movieActors);
  })
  .catch(function (error) {
    console.log(error);
  });