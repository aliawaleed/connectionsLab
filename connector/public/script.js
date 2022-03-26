window.addEventListener("load", () => { // on load
    //fetch messages from API and show it on the feed when the page loads
    console.log("loaded");
    fetch('/messages') //fetch the information from the index.js file
    .then(res => res.json()) //returning promise object 
    .then(data => {
        console.log(data);
        let allPosts = data.data;

        allPosts.sort(function(a, b){
            return b.timestamp-a.timestamp
        })
        console.log(allPosts);
        let feed = document.getElementById("posts");

        for(let i=0; i < allPosts.length; i++) { //print all of the shows initially 
            console.log(allPosts[i]);
            let newPost = document.createElement("li");
            newPost.classList.add("post");

            let user = document.createElement("h1");
            user.classList.add("post__user");  
            user.textContent = allPosts[i].name;

            let date = document.createElement("h2");
            date.classList.add("post__date");  

            properDate = "";
            for (let j = 0; j < 10; j++) { // for day, month, year
                properDate += allPosts[i].createdAt[j];
            }
            properDate += " ";
            for (let j = 11; j < 19; j++) { // for time
                properDate += allPosts[i].createdAt[j];
            }
            
            date.textContent = properDate;

            let post = document.createElement("p");  
            post.classList.add("post__content");
            post.textContent = allPosts[i].post;

            newPost.appendChild(user);
            newPost.appendChild(date);
            newPost.appendChild(post);
            feed.appendChild(newPost);
        }
    })
})

function createPost(){ 
    console.log("clicked");
    if(create.style.display){
        posts.style.display = "block";
        create.style.display = "none";
    }
    else{
        posts.style.display = "none";
        create.style.display = "block";
    }
}

function toPost(){
    // taking the name and post content from the user
    let cname = document.getElementById("username").value;
    let cpost = document.getElementById("user_post").value
    console.log(cname, cpost);

    //creating the object we want to send over to the server
    let data = {
        name: cname,
        post: cpost
    }

    //send it over to the server
    let msg = JSON.stringify(data);
    console.log(msg);

    fetch('/message', {
        method: 'POST', //says its a post
        headers: {'Content-Type': 'application/json'},//content type is a JSON
        body: msg//containing the actual message
    })
    .then(res => res.json())
    .then(data => {console.log(data )})
    console.log("posted")
    create.style.display = "none";
    posts.style.display = "block";
    location.reload(); // to refresh the page and upload the current post
}

function postOnEnter() { 
    console.log("here");
    if(event.key === 'Enter') {
        toPost();    
    }
}