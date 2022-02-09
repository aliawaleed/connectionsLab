//arrays for all images
var topList = ["tops1", "tops2", "tops3", "tops4", "tops5", "tops6"]; 
var bottomList = ["bottom1", "bottom2", "bottom3", "bottom4", "bottom5"];
var shoeList = ["shoes1", "shoes2", "shoes3", "shoes4", "shoes5"];
var toyList = ["toy1", "toy2", "toy3", "toy4", "toy5"];

//check which element of array it's on
var topcnt = 0;
var bottomcnt = 0;
var shoecnt = 0;
var toycnt = 0;

//audio variable
var x = document.getElementById("twinkle"); 

// declaring variables to increase and decrease for tops, bottoms, and shoes
let inc = document.getElementById('top_increase');
let dec = document.getElementById('top_decrease');
let incb = document.getElementById('bottom_increase');
let decb = document.getElementById('bottom_decrease');
let incs = document.getElementById('shoe_increase');
let decs = document.getElementById('shoe_decrease');
let shuffle = document.getElementById('shuffle');


////////////////////////////////*     Tops      *////////////////////////////////
//next one image: tops
function t_increase() {
    document.getElementById("topPhoto").src = "images/" + topList[topcnt] + ".jpg";
    if (topcnt >= topList.length - 1) {
        topcnt = 0;
    } else {
        topcnt += 1;
    }
}
//back one image: tops
function t_decrease() {
    document.getElementById("topPhoto").src = "images/" + topList[topcnt] + ".jpg";
    if (topcnt <= 0) {
        topcnt = topList.length - 1;
    } else {
        topcnt -= 1;
    }
}

////////////////////////////////*     Bottoms      *////////////////////////////////
//next one image: bottoms
function b_increase() {
    document.getElementById("bottomPhoto").src ="images/" + bottomList[bottomcnt] + ".jpg";
    if (bottomcnt >= bottomList.length - 1) {
        bottomcnt = 0;
    } else {
        bottomcnt += 1;
    }
}
//back one image: bottoms
function b_decrease() {
    document.getElementById("bottomPhoto").src ="images/" + bottomList[bottomcnt] + ".jpg";
    if (bottomcnt <= 0) {
        bottomcnt = bottomList.length - 1;
    } else {
        bottomcnt -= 1;
    }
}
  
////////////////////////////////*     Shoes      *////////////////////////////////
//next one image: shoes
function s_increase() {
    document.getElementById("shoePhoto").src ="images/" + shoeList[shoecnt] + ".jpg";
    if (shoecnt >= shoeList.length - 1) {
    shoecnt = 0;
    } else {
    shoecnt += 1;
    }
}
//back one image: shoes
function s_decrease() {
    document.getElementById("shoePhoto").src ="images/" + shoeList[shoecnt] + ".jpg";
    if (shoecnt <= 0) {
    shoecnt = shoeList.length - 1;
    } else {
    shoecnt -= 1;
    }
}
    
////////////////////////////////*     Toys      *////////////////////////////////
//keyboard control for toys - 37 for right arrow: next / 39 for left arrow: back 
document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if (e.keyCode === 37) {
      document.getElementById("toyPhoto").src = "images/" + toyList[toycnt] + ".jpg";
        if (toycnt <= 0) {
            toycnt = toyList.length - 1;
        } else {
            toycnt -=1;
        }
    } else if (e.keyCode === 39) {
      document.getElementById("toyPhoto").src = "images/" + toyList[toycnt] + ".jpg";
        if (toycnt >= toyList.length - 1) {
            toycnt = 0;
        } else {
            toycnt += 1;
        }
    }
  })

// audio control
function playAudio() { 
    x.play(); 
  } 
  
  function pauseAudio() { 
    x.pause(); 
  } 

// associating increase and decrease with click
inc.addEventListener('click', t_increase);  
dec.addEventListener('click', t_decrease);  
incb.addEventListener('click', b_increase);  
decb.addEventListener('click', b_decrease);  
incs.addEventListener('click', s_increase);  
decs.addEventListener('click', s_decrease); 

//change all outfit together with next image for each
shuffle.addEventListener('click', t_increase);
shuffle.addEventListener('click', b_increase);  
shuffle.addEventListener('click', s_increase);