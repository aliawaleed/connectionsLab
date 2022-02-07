//arrays for all images
var topList = ["tops1", "tops2", "tops3", "tops4", "tops5"]; 
var bottomList = ["bottom1", "bottom2", "bottom3", "bottom4", "bottom5"];
var shoeList = ["shoes1", "shoes2", "shoes3", "shoes4", "shoes5"];
var toyList = ["toy1", "toy2", "toy3", "toy4", "toy5"];

var counter = 0;
var cnt = 0;
var shoecnt = 0;

//next one image: tops
function t_increase() {
    document.getElementById("topPhoto").src = "images/" + topList[counter] + ".jpg";
    if (counter >= topList.length - 1) {
        counter = 0;
    } else {
        counter += 1;
    }
}

//back one image: tops
function t_decrease() {
    document.getElementById("topPhoto").src = "images/" + topList[counter] + ".jpg";
    if (counter <= 0) {
        counter = topList.length - 1;
    } else {
        counter -= 1;
    }
}

let inc = document.getElementById('top_increase');
inc.addEventListener('click', t_increase);  
let dec = document.getElementById('top_decrease');
dec.addEventListener('click', t_decrease);  

//next one image: bottoms
function b_increase() {
    document.getElementById("bottomPhoto").src ="images/" + bottomList[cnt] + ".jpg";
    if (cnt >= bottomList.length - 1) {
        cnt = 0;
    } else {
        cnt += 1;
    }
}

//back one image: bottoms
function b_decrease() {
    document.getElementById("bottomPhoto").src ="images/" + bottomList[cnt] + ".jpg";
    if (cnt <= 0) {
        cnt = bottomList.length - 1;
    } else {
        cnt -= 1;
    }
}
  
let incb = document.getElementById('bottom_increase');
incb.addEventListener('click', b_increase);  
let decb = document.getElementById('bottom_decrease');
decb.addEventListener('click', b_decrease);  

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
    
let incs = document.getElementById('shoe_increase');
incs.addEventListener('click', s_increase);  
let decs = document.getElementById('shoe_decrease');
decs.addEventListener('click', s_decrease); 

//keyboard control for toys - 37 for right arrow: next / 39 for left arrow: back 
document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if (e.keyCode === 37) {
      document.getElementById("toyPhoto").src = "images/" + toyList[cnt] + ".jpg";
        if (cnt <= 0) {
            cnt = toyList.length - 1;
        } else {
            cnt -=1;
        }
    } else if (e.keyCode === 39) {
      document.getElementById("toyPhoto").src = "images/" + toyList[cnt] + ".jpg";
        if (cnt >= toyList.length - 1) {
            cnt = 0;
        } else {
            cnt += 1;
        }
    }
  })

//change all outfit together with next image for each
let shuffle = document.getElementById('shuffle');
shuffle.addEventListener('click', t_increase);
shuffle.addEventListener('click', b_increase);  
shuffle.addEventListener('click', s_increase);