var explosion = ["Vesper", "Espresso Martini", "Alabama Slammer", "White Russian", "Penicillin", "Kamikaze"];
var smart = ["Dark & Stormy", "Negroni", "Old Fashioned", "French 75", "Mint Julep"];
var scared = ["Bloody Mary", "Boiler Maker", "Corpse Reviver No. 2", "Cuba Libra", "Grasshopper"];
var investigative = ["Sidecar", "Blue Motorcycle", "Bellini", "Black & Tan", "Gin Fizz"];
var laugh = ["Mojito", "Pimm's Cup", "Tom Collins", "Daiquiri", "Bahama Mama"];
var dramatic = ["Dirty Martini", "Alabama Slammer", "Caipirinha", "Fuzzy Navel", "Greyhound"];
var youngLove = ["Cosmo", "Midori Sour", "Sex on the Beach", "Mai Tai", "Pina Colada"];
var yeehaw = ["Whiskey Sour", "Polama", "Cement Mixer", "Long Island Iced Tea", "Lynchburg Lemonade", "Mudslide"];
var thriller = ["Moscow Mule", "Sazerac", "Boulevardier", "Gimlet", "Mind Eraser"];
var family = ["Mojito", "Margarita", "Aperol Spritz", "Mimosa", "Hot Toddy"];

var drinks = [explosion, smart, scared, investigative, laugh, dramatic, youngLove, yeehaw, thriller, family]


var search = laugh[Math.floor(Math.random() * laugh.length)]

requestURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search

fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log("results", data.drinks);
            // displayResults();
        })
        .catch(function(error) {
            console.log(error);
        });

        // strDrink
        // strDrinkThumb
        //strIngredient1
        //