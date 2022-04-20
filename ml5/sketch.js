// for ml5
let mobilenet;
let classifier;
// to use webcam 
let video; 
let label = 'unidentifiable';
// individual people
let alia;
let ziad;
let omar;
let farah;
let hagar;
let beethoven;
let ingy;

// training button
let trainButton;
// variables to change filter color
let cantEnter = false;
let canEnter = false;
// to store age of the individuals
let theirAge;
// to load the data from the JSON file
let allPeople;
let people_array = [];

// loading JSON data into array 
window.addEventListener("load", () => { // on load
    fetch("./info.json") //fetch the information from the json file
    .then(response => response.json()) //returning promise object 
    .then((data) => {
        allPeople = data.people;
        // adding everyone in the array
        for(let i = 0; i < allPeople.length; i++){
            people_array.push(allPeople[i]);
        }
    })
})

// for error checking
function modelReady() {
    console.log('Model is ready!!!');
    // classifier.load('model.json', customModelReady);
}

// // for saving the data 
// function customModelReady() {
//   console.log('Custom Model is ready!!!');
//   label = 'model ready';
//   classifier.classify(gotResults); //instead of whileTraining
// }

// check if video cam is ready
function videoReady() {
    console.log('Video is ready!!!');
}

// run over and over during training process and report back information
function whileTraining(loss) {
    // loss/cost function calculates the error or likelihood
    if (loss == null) { // when done training
        console.log('Training Complete');
        classifier.classify(gotResults);
    } else {
        console.log(loss);
    }
}

// when done training
function gotResults(error, result) {
    console.log(result);
    if (error) {
        console.error(error);
    } else {
        let image = document.getElementById('img');
        let profession = document.getElementById("profession");
        // only if very confident, set the label to the first result
        if (result[0].confidence >= 0.98) {
            label = result[0].label;
        }
        else{
            // user is unidentifiable
            label = "unidentifiable";
            profession.textContent = "Profession: NA";
            image.src = "https://st2.depositphotos.com/1502311/12020/v/600/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg";
        }
        let name = document.getElementById("name");
        name.textContent = "Name: " + label;
        let age = document.getElementById("age");
        theirAge = "NA"; //set as NA unless otherwise

        // iterate over the array of people and check if the name and label are the same
        for (let i = 0; i < people_array.length; i++) {
            if (label == people_array[i].name) {
                //to display the user information
                theirAge = people_array[i].age;
                image.src = people_array[i].image;
                profession.textContent = "Profession: student";
                // console.log(label, people_array[i].name);
            }
        }

        //set the text of the age to their age
        age.textContent = "Age: " + theirAge;

        // to allow/disallow entrance based on age
        if(theirAge == "NA"){
            cantEnter = false;
            canEnter = false;
        }
        else if (theirAge < 21) {
            cantEnter = true;
            canEnter = false;
        }
        else{
            cantEnter = false;
            canEnter = true;
        }
        classifier.classify(gotResults);
    }
}

function setup() {
    var canvas = createCanvas(480, 405);
    canvas.parent('p5'); //add to div to position it correctly on the screen
    // for webcam
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    //  making a feature extractor built on top of MobileNet
    mobilenet = ml5.featureExtractor('MobileNet', modelReady);
    // for the classifier, with the video and a callback 
    classifier = mobilenet.classification(video, { numLabels: 7 }, videoReady); //set numLabels to number expected or length of array 

    // button with a label to add specific image to the data -- changed format of button for easier styling
    alia = document.getElementById("alia");
    alia.addEventListener("click", function () {
        classifier.addImage('Alia');
    });

    ziad = document.getElementById("ziad");
    ziad.addEventListener("click", function () {
        classifier.addImage('Ziad');
    });

    omar = document.getElementById("omar");
    omar.addEventListener("click", function () {
        classifier.addImage('Omar');
    });

    farah = document.getElementById("farah");
    farah.addEventListener("click", function () {
        classifier.addImage('Farah');
    });

    hagar = document.getElementById("hagar");
    hagar.addEventListener("click", function () {
        classifier.addImage('Hagar');
    });

    beethoven = document.getElementById("beethoven");
    beethoven.addEventListener("click", function () {
        classifier.addImage('Beethoven');
    });

    ingy = document.getElementById("ingy");
    ingy.addEventListener("click", function () {
        classifier.addImage('Ingy');
    });

    // button to press and train the model
    trainButton = document.getElementById("train");
    trainButton.addEventListener("click", function () {
        classifier.train(whileTraining);
    });

    // // to save the trained data
    // saveButton = document.getElementById('save');
    // saveButton.addEventListener("click", function () {
    //   classifier.save();
    // });
}

function draw() {
    background(0);
    // load every frame of the video in real time
    image(video, 0, 0, 480, 405);

    // add filter overlay color based on age group
    if(cantEnter == false && canEnter == false){
        strokeWeight(10);
        fill(0,0);
        rect(0, 0, 480, 405);
    }
    // under 21
    if (cantEnter == true) {
        strokeWeight(10);
        fill(255, 0, 0, 100);
        rect(0, 0, 480, 405);
    }
    // over 21
    if (canEnter == true){
        strokeWeight(10);
        fill(0, 255, 0, 100);
        rect(0, 0, 480, 405);
    }
}