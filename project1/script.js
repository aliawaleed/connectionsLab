let allRecipes;
let recipes_array = [];
let user_input = [];

// add user input to array
function addRecord() {
    var input = document.getElementById('inputtext');
    console.log(input.value);
    if (input.value != "") {
        user_input.push(input.value);
        input.value = "";  
        displayRecord();
    }
    else{
        document.getElementById("web-instructions").innerHTML = "Please write the ingredient first!";
    }
}

function goBack() {
    location.reload();
}

function search(input) {
    if(event.key === 'Enter') {
        var input = document.getElementById('inputtext');
        user_input.push(input.value);
        input.value = "";  
        displayRecord();      
    }
}

function displayRecord() {
    document.getElementById("input").innerHTML =  "<p>" + "Ingredients list: " + "</p>"+ "<p>" + user_input.join("</p><p>") + "</p>";
}   

function printarray() {
    console.log(user_input)
    if (user_input.length == 0) {
        document.getElementById("web-instructions").innerHTML = "Please add ingredients first!";
        console.log("add");
    }
    else {
        compare(user_input);
    }
}


let options = [];

function compare(userinput){
    let recipesDivs = document.querySelectorAll(".recipe");
    var dict = {};
    for(let i = 0; i < recipes_array.length; i++){
        let cnt = 0;
        let new_list = [];

        for (let u = 0; u < user_input.length; u++){
            new_list.push(0);
        }
        // console.log(new_list);
         
        for(let j = 0; j < recipes_array[i].ingredients.length; j++){
            for(let k = 0; k < user_input.length; k++){
                if ((recipes_array[i].ingredients[j].includes(" " + user_input[k] + " ") || recipes_array[i].ingredients[j].includes(user_input[k] + "s"))&& new_list[k] == 0){
                    cnt += 1;
                    new_list[k] = 1;
                    console.log(cnt);
                }
            }
        }
        dict[i] = cnt;
    }

    console.log(Object.keys(dict).length);
    console.log("dict", dict);

    let max = 0;
    for(var key in dict){
        var value = dict[key];
        if (value > max){
            max = value;
        }
        console.log("the max is", max);
    }

    for(var key in dict){
        var value = dict[key];
        if (value == max && value > 0 ){
            options.push(recipesDivs[key]);
            // recipesDivs[key].style.display = "block"; //to print all
            // console.log("recipe",recipesDivs[key]);
        }
    }

    if (max == 0) { //print none exist
        document.getElementById("web-instructions").innerHTML = "None of the recipes have that. Please input other ingredients!";
        let other = document.getElementById("another");
        other.style.display = "none";
        console.log("error");
    } else {
        var item = options[Math.floor(Math.random()*options.length)]; //to get random item
        item.style.display = "block";
        let other = document.getElementById("another");
        other.style.display = "block";
        let back = document.getElementById("back");
        back.style.display = "block";
        let inpBox = document.getElementById("input-box");
        inpBox.style.display = "none";
        let finder = document.getElementById("finder");
        finder.style.display = "none";
        let input = document.getElementById("input");
        input.style.display = "none";
        document.getElementById("article").style.height = "31em";
    }

    console.log("options",options);
}

function anotherOption(){
    let another = [];
    for (let i = 0; i < options.length; i++){
        another.push(options[i]);
    }
    console.log("another",another);

    for (let i = 0; i < another.length; i++){
        var displaySetting = another[i].style.display;
        if (displaySetting == "block"){
            another[i].style.display = "none";
        }
    }
    var item = another[Math.floor(Math.random()*another.length)]; //to get random item
    item.style.display = "block";
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// on load
window.addEventListener("load", () => {
    console.log("page is loaded");

    fetch("./sample.json") //fetch the information from the json file
    .then(response => response.json()) //returning promise object 
    .then((data) => {
        console.log(data); //seeing the data
        allRecipes = data.recipes;
        console.log(allRecipes);

        for(let i = 0; i < allRecipes.length; i++){
            recipes_array.push(allRecipes[i]);
        }

        //create html elements for the recipes
        for(let i = 0; i < recipes_array.length; i++){
            let recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");
            let recipeName = document.createElement('h2'); //create a header(2) for each recipe
            recipeName.classList.add("list__item");
            recipeName.textContent = recipes_array[i].title; //add text to list
            recipeDiv.appendChild(recipeName);

            //adding images
            let recipeImage = document.createElement('img');
            recipeImage.classList.add("img__item");
            recipeImage.src = recipes_array[i].picture_link;
            recipeDiv.appendChild(recipeImage);

            //headline for ingredients
            let ingredientHeadline = document.createElement("h4");
            ingredientHeadline.textContent = "Ingredients: ";
            recipeDiv.appendChild(ingredientHeadline); // append the li to the ul

            for(let j = 0; j < recipes_array[i].ingredients.length - 1; j++){ // loop through array of instructions
                let ingredients = document.createElement('li'); //create an li for the ingredients
                ingredients.classList.add("list__item");
                ingredients.textContent = recipes_array[i].ingredients[j]; //add text to list
                recipeDiv.appendChild(ingredients); // append the li to the ul
            }

            //headline for instructions
            let instructionsHeadline = document.createElement("h4");
            instructionsHeadline.textContent = "Instructions: ";
            recipeDiv.appendChild(instructionsHeadline);

            //create an li for the ingredients and give it the class "list"
            let instructionsArray = recipes_array[i].instructions.split('.'); // split the instructions string and add them in an array
            for(let k = 0; k < instructionsArray.length - 1; k++){ // length -1 due to the last element being /n
                let instructions = document.createElement('li'); //create an li for the ingredients
                instructions.classList.add("instructions__list__item");
                instructions.textContent = (k+1) + "." + instructionsArray[k]; //number them and add text to list
                recipeDiv.appendChild(instructions); // append the li to the ul
            }
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