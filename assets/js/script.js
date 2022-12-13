var explosion = ["Vesper", "Espresso Martini", "Alabama Slammer", "White Russian", "Penicillin", "Kamikaze"];
var smart = ["Dark & Stormy", "Negroni", "Old Fashioned", "French 75", "Mint Julep"];
var scared = ["Bloody Mary", "BoilerMaker", "Corpse Reviver", "Cuba Libra", "Grasshopper"];
var investigative = ["Sidecar", "Blue Motorcycle", "Bellini", "Black & Tan", "Gin Fizz"];
var laugh = ["Mojito", "Pimm's Cup", "Tom Collins", "Daiquiri", "Bahama Mama"];
var dramatic = ["Dirty Martini", "Alabama Slammer", "Caipirinha", "Fuzzy Navel", "Greyhound"];
var youngLove = ["Cosmo", "Midori Sour", "Sex on the Beach", "Mai Tai", "Pina Colada"];
var yeehaw = ["Whiskey Sour", "Polama", "Cement Mixer", "Long Island Iced Tea", "Lynchburg Lemonade", "Mudslide"];
var thriller = ["Moscow Mule", "Sazerac", "Boulevardier", "Gimlet", "Mind Eraser"];
var family = ["Mojito", "Margarita", "Aperol Spritz", "Mimosa", "Hot Toddy"];

// var search = scared[4]  ---this is a tester for broken searches
// scared is all good

var drinks = [explosion, smart, scared, investigative, laugh, dramatic, youngLove, yeehaw, thriller, family];

var i = 3

var search = drinks[i][Math.floor(Math.random() * drinks[i].length)];


requestURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search;

var fillCards = function(name, picture, mainIngred, instructions) {

    
            console.log(name);
            console.log(picture);
            console.log(mainIngred);
            console.log(instructions);

}

fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log("results", data.drinks);
            console.log(data.drinks[0].strDrink);
            console.log(data.drinks[0].strIngredient1);
            console.log(data.drinks[0].strDrinkThumb);
            console.log(data.drinks[0].strInstructions);

            fillCards(data.drinks[0].strDrink, data.drinks[0].strIngredient1, data.drinks[0].strDrinkThumb, data.drinks[0].strInstructions);
        })
        .catch(function(error) {
            console.log(error);
        });
