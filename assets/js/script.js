var movieUrl = "http://www.omdbapi.com/?apikey=88ff8839&t=shrek"

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