let express = require('express'); //include express module/package
let Datastore = require('nedb');

//initialize app
let app = express(); //creates object/actual application that we want to use from express

//tell your express app to accept and parse your JSON information
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//initialize database
let db = new Datastore({
    filename : "posts.db",
    timestampData: true //to add date and time
});
db.loadDatabase(); //load the database with the data

//app variables
/********  In the case of using the posts array ********/
// let posts = [];

app.use('/', express.static('public')); //to serve the public folder

app.post('/message', (req,res) => { //add the individual posts to an array
    console.log(req.body);
    /********  In the case of using the posts array ********/
    // posts.push(req.body); //adding to the variable array
    // add it to the database
    db.insert(req.body, function(err, newDoc){
        console.log(newDoc);
    })
    res.json({"message" : "OK"}); //to avoid getting an error
})

//to send the data from the array to the server
app.get('/messages', (req,res) =>{
    /********  In the case of using the posts array ********/
    // let dataToSend = {
    //     "posts" : posts
    // };
    // res.json(dataToSend);

    let dataToSend;
    db.find({}, function (err, docs) {
        console.log(docs)
        dataToSend = {data: docs}
        res.json(dataToSend);
    });
})

app.listen(7000, () => {console.log("The server is up and running on port 7000.");}) // to listen on port 7000