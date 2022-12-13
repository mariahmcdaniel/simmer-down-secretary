var explosion = ["Vesper", "Espresso Martini", "Alabama Slammer", "White Russian", "Penicillin", "Kamikaze"];
var smart = ["Dark & Stormy", "Negroni", "Old Fashioned", "French 75", "Mint Julep"];
var scared = ["Bloody Mary", "BoilerMaker", "Corpse Reviver", "Cuba Libra", "Grasshopper"];
var investigative = ["Sidecar", "Blue Lagoon", "Bellini", "Black & Tan", "Gin Fizz"];
var laugh = ["Mojito", "Pimm's Cup", "Tom Collins", "Daiquiri", "Bahama Mama"];
var dramatic = ["Dirty Martini", "Alabama Slammer", "Caipirinha", "Fuzzy Navel", "Greyhound"];
var youngLove = ["Cosmo", "Midori Sour", "Sex on the Beach", "Mai Tai", "Pina Colada"];
var yeehaw = ["Whiskey Sour", "Polama", "Cement Mixer", "Long Island Iced Tea", "Lynchburg Lemonade", "Mudslide"];
var thriller = ["Moscow Mule", "Sazerac", "Boulevardier", "Gimlet", "Mind Eraser"];
var family = ["Mojito", "Margarita", "Aperol Spritz", "Mimosa", "Hot Toddy"];

var cardInfo = document.getElementById('drinks')

var j = 0
// var search = investigative[1]  
// ---this is a tester for broken searches
// scared, investigative all good


var drinkFetch = function () {
    for (var i = 0; i < 4; i++) {
        
        var drinks = [explosion, smart, scared, investigative, laugh, dramatic, youngLove, yeehaw, thriller, family];
        
        
        var search = drinks[j][Math.floor(Math.random() * drinks[j].length)];
        
        requestURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search;
        
        // <div class="card mb-3" style="max-width: 540px;">
        //         <div class="row g-0">
        //             <div class="col-md-4">
        //                 <img src="..." class="img-fluid rounded-start" alt="...">
        //             </div>
        //             <div class="col-md-8">
        //                 <div class="card-body">
        //                     <h5 class="card-title">Card title</h5>
        //                     <p class="card-text">This is a wider card with supporting text below as a natural
        //                         lead-in to
        //                         additional content. This content is a little bit longer.</p>
        //                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        var fillCards = function(name, picture, mainIngred, instructions) {
    
            console.log(name);
            console.log(picture);
            console.log(mainIngred);
            console.log(instructions);

            var cardDiv1 = document.createElement('div');
            cardDiv1.className = "card mb-3";
            cardDiv1.setAttribute('style', 'max-width: 540px');

            var cardDiv2 = document.createElement('div');
            cardDiv2.className = 'row g-0';

            var cardDiv3 = document.createElement('div');
            cardDiv3.className = 'col-md-4';          
            
            var cardPicture = document.createElement('img');
            cardPicture.setAttribute('src', picture);
            
            var cardDiv4 = document.createElement('div');
            cardDiv3.className = 'col-md-4';          



    }

fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {

            fillCards(data.drinks[0].strDrink, data.drinks[0].strDrinkThumb, data.drinks[0].strIngredient1, data.drinks[0].strInstructions);
        })
        .catch(function(error) {
            console.log(error);
        });

}}
drinkFetch();