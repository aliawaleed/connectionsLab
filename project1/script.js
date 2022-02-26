let allRecipes; //to obtain all recipes from json file
let recipes_array = []; //array for all recipes for easy access
let user_input = []; //ingredients from user input to later compare
var current = -1; //recipe currently displayed

// add user input to array
function addIngredient() {
    var input = document.getElementById('inputtext');
    // console.log(input.value);
    if (input.value != "") {
        user_input.push(input.value);
        input.value = "";  
        displayIngredients();
    }
    else{
        document.getElementById("web-instructions").innerHTML = "Please write the ingredient first!"; //error checking - if user doesn't write an ingredient before clicking the button
    }
}

function addIngredientOnEnter() { // add ingredient if user presses enter as well
    if(event.key === 'Enter') {
        addIngredient();    
    }
}

function displayIngredients() { //to display chosen ingredients
    document.getElementById("input").innerHTML =  "<p>" + "Ingredients list: " + "</p>"+ "<p>" + user_input.join("</p><p>") + "</p>";
}   

function printarray() { //when user clicks display
    console.log(user_input)
    if (user_input.length == 0) { //if no user input
        document.getElementById("web-instructions").innerHTML = "Please add ingredients first!";
    }
    else {
        compare(); //compare user input with recipes
    }
}

function goBack() { //if user clicks home icon
    location.reload();
}

let options = []; //array of options that could be displayed to the user
function compare(){
    let recipesDivs = document.querySelectorAll(".recipe"); //nodelist for all recipes
    var dict = {}; //dictionary to store recipes with the number of ingredients that they match based on user input
    for(let i = 0; i < recipes_array.length; i++){
        let cnt = 0; //start with 0 matches
        let new_list = []; // boolean array to check if user input exists in recipe (0 if no, 1 if yes)

        for (let u = 0; u < user_input.length; u++){
            new_list.push(0);
        }
         
        for(let j = 0; j < recipes_array[i].ingredients.length; j++){ //for each recipe ingredient
            for(let k = 0; k < user_input.length; k++){ //for each user input
                if ((recipes_array[i].ingredients[j].includes(" " + user_input[k] + " ") || recipes_array[i].ingredients[j].includes(user_input[k] + "s")) && new_list[k] == 0){ //if the recipe includes the user input, separated by space or with an s as plural AND it wasn't previously checked (to avoid for example egg and egg yolk to be seen as 2 different things)
                    cnt += 1;
                    new_list[k] = 1; //change boolean to 1
                }
            }
        }
        dict[i] = cnt; //store value of matches to the recipe
    }

    // console.log("dictionary", dict); //print recipe with matches for error checking

    //to find the recipes with maximum match value
    let max = 0; 
    for(var key in dict){
        var value = dict[key];
        if (value > max){
            max = value; //set max value to the highest one
        }
        console.log("the max is", max);
    }

    for(var key in dict){
        var value = dict[key];
        if (value == max && value > 0 ){ //find all recipes with the same number of matches and add them to list of options
            options.push(recipesDivs[key]);
        }
    }

    if (max == 0) { // if none of the ingredients are matching
        document.getElementById("web-instructions").innerHTML = "None of the recipes have that. Please input other ingredients!";
    } else {
        let random = Math.floor(Math.random()*options.length); //get random index from array of options
        current = random; //set current recipe to value of index 
        var item = options[random]; // get random recipe from options array
        item.style.display = "block"; //display the recipe
        let other = document.getElementById("another"); //shuffle button
        other.style.display = "block";
        let back = document.getElementById("back"); //back/menu button
        back.style.display = "block";
        let inpBox = document.getElementById("input-box"); //user input box
        inpBox.style.display = "none";
        let finder = document.getElementById("finder"); //title
        finder.style.display = "none";
        let input = document.getElementById("input"); //list of user input
        input.style.display = "none";
        document.getElementById("article").style.height = "31em"; // to maintain height of book
    }
    // console.log("options",options); // log all of the options that match - for error checking
}

function anotherOption(){ //another option from array of options if user clicks on the shuffle button
    options[current].style.display = "none"; //do not display current recipe

    let random = Math.floor(Math.random()*options.length); //get another random recipe
    while (random == current) {  // to avoid getting the same recipe twice in a row
        if (options.length == 1){ //if there is only one recipe that matches display alert
            alert("Sorry! that's the only recipe we have that matches your input!");
            break;
        }
        // console.log("same"); //to see how many times the random value is the same
        random = Math.floor(Math.random()*options.length)
        if (random != current) {
            break;
        }
    }
    current = random; //set new current value
    options[random].style.display = "block";
}

window.addEventListener("load", () => { // on load
    fetch("./sample.json") //fetch the information from the json file
    .then(response => response.json()) //returning promise object 
    .then((data) => {
        // console.log(data); // to know number of recipes
        allRecipes = data.recipes;

        for(let i = 0; i < allRecipes.length; i++){ //push all recipes to array
            recipes_array.push(allRecipes[i]);
        }

     //create html elements for the recipes
        for(let i = 0; i < recipes_array.length; i++){
            let recipeDiv = document.createElement("div"); //div for each individual recipe
            recipeDiv.classList.add("recipe");
            let recipeName = document.createElement('h2');
            recipeName.classList.add("recipe_name"); //for recipe title
            recipeName.textContent = recipes_array[i].title;
            recipeDiv.appendChild(recipeName); //add recipe title to recipe div

            //adding images
            let recipeImage = document.createElement('img');
            recipeImage.classList.add("img__item");
            recipeImage.src = recipes_array[i].picture_link;
            recipeDiv.appendChild(recipeImage);

            //headline for ingredients
            let ingredientHeadline = document.createElement("h4");
            ingredientHeadline.textContent = "Ingredients: ";
            recipeDiv.appendChild(ingredientHeadline);

            let allIngredients = document.createElement("ul");
            allIngredients.classList.add("all_ingredients");
            for(let j = 0; j < recipes_array[i].ingredients.length - 1; j++){ // loop through array of ingredients (-1 for empty string in json file)
                let ingredients = document.createElement('li'); //create an li for the ingredients
                ingredients.classList.add("list__item");
                ingredients.textContent = recipes_array[i].ingredients[j]; //add text to list
                allIngredients.appendChild(ingredients);
            }
            recipeDiv.appendChild(allIngredients);

            //headline for instructions
            let instructionsHeadline = document.createElement("h4");
            instructionsHeadline.textContent = "Instructions: ";
            recipeDiv.appendChild(instructionsHeadline);

            let instructionsArray = recipes_array[i].instructions.split('.');// split  instructions string and add them to an array
            for(let k = 0; k < instructionsArray.length - 1; k++){ // length -1 due to the last element being /n
                let instructions = document.createElement('li'); //create an li for the instructions
                instructions.classList.add("instructions__list__item");
                instructions.textContent = (k+1) + "." + instructionsArray[k]; //number them and add text to list
                recipeDiv.appendChild(instructions);
            }
            //elements to display
            recipeDiv.style.display = "none";
            let back = document.getElementById("back");
            back.style.display = "none";
            let other = document.getElementById("another");
            other.style.display = "none";
            let list = document.getElementById("list");
            list.appendChild(recipeDiv);
        }
    })
})