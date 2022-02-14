let allRecipes;

window.addEventListener("load", () => {
    console.log("page is loaded");

    fetch("./sample.json") //fetch the information - or add link if from an online URL
    .then(response => response.json()) //returning promise object 
    .then((data) => {
        console.log(data); //seeing the data
        allRecipes = data.recipes;
        console.log(allRecipes);

        //create html elements that are of the color in the array
        for(let i= 0; i < allRecipes.length; i++){
            debugger; //stops code at specific part of the code
            //create an li for each recipe and give it the class "list"
            let recipeName = document.createElement('li');
            recipeName.classList.add("list__item");
            recipeName.textContent = "------ " + allRecipes[i].title + " ------"; //add text to list
            // get the list element using the id "list"
            let list = document.getElementById("list");
            // append the li to the ul
            list.appendChild(recipeName);

            for(let j= 0; j < allRecipes[i].ingredients.length - 1; j++){ // loop through array of instructions
                //create an li for the ingredients and give it the class "list"
                let ingredients = document.createElement('li');
                ingredients.classList.add("list__item");
                ingredients.textContent = allRecipes[i].ingredients[j]; //add text to list
                // get the list element using the id "list"
                let ings = document.getElementById("list");
                ings.appendChild(ingredients); // append the li to the ul
            }

            //create an li for the ingredients and give it the class "list"
            let instructionsArray = allRecipes[i].instructions.split('.'); // split the instructions string and add them in an array
            for(let k= 0; k < instructionsArray.length - 1; k++){ // length -1 due to the last element being /n
                //create an li for the ingredients and give it the class "list"
                let instructions = document.createElement('li');
                instructions.classList.add("list__item");
                instructions.textContent = (k+1) + "." + instructionsArray[k]; //number them and add text to list
                // get the list element using the id "list"
                let instructs = document.getElementById("list");
                // append the li to the ul
                instructs.appendChild(instructions);
            }
        }
    })
})