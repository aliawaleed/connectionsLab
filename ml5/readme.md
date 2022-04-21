# Using ML5

## Project Name
[21+ Entrance Only](https://aliawaleed.github.io/connectionsLab/ml5/)

## Project Description and Inspiration
This application identifies the person standing in front of their camera, loading in their name, age, and image. If the person is < 21 years old, they are notified that they are under age and cannot enter. When thinking about what kind of data to train for identification, I thought about the eye ID that we use to enter through the airports at the UAE. This inspired me to train data that would allow entrance to a place that only allows people who are 21+ to enter.

## Demo
https://user-images.githubusercontent.com/57350259/164340437-d3ae4a47-5a64-4ee4-9d23-b538ff7aa50c.mov

## Process and Learnings
The project uses ml5 to train the data and so the first thing I did was read through the [ml5 documentation](https://learn.ml5js.org/#/) and watched Daniel Schiffman's [introductory video](https://thecodingtrain.com/learning/ml5/0.1-introduction.html) to understand what ml5 does and how it works. Next, I used [boiler plate](https://github.com/ml5js/ml5-library/tree/main/examples/p5js/ml5Boilerplate/ml5Boilerplate_Version) code that he referenced to load in ml5 and p5 to later be used in the code. I then followed along with 3 of his other videos to begin training the data and get ml5 to work and get an understanding of what ml5 does in the background and what I would need to do. The first video helped me understand how [object detection](https://thecodingtrain.com/learning/ml5/1.3-object-detection.html) occurs, first with preloading images that exist and later using the webcam to identify the object. This led me to look into COCO-ssd which is the model used for the project in the video. The model detects and identifies objects that are previously defined in a large-scale object-detection, segmentation, and captioning dataset; COCO dataset. Meaning that this video used a pre-trained model to identify specific classes of objects that are saved on the data set. 

Since I didn't want to apply the code blindly and wanted to understand more of the concepts and theory, I watched another video that Dan Schiffman had to explain the process behind [transfer learning](https://thecodingtrain.com/learning/ml5/2.1-transfer-learning.html). I learned that MobileNet is the pretrained model used that's trained on a database of millions of images called ImageNet. When an image/object is detected, MobileNet returns a label that identifies the object and a confidence/probability score of what the object could be. To be able to train my own model, I needed to understand how the neural network works to process data and move to the following layer until features are identified. We then convert the Feature Extractor to a classifier to train with my own images/data.

Next, I started the implementation where I followed along with the [documentation](https://learn.ml5js.org/#/reference/feature-extractor) as well as the [video](https://thecodingtrain.com/learning/ml5/3.1-feature-extractor-classification.html) to train an ML image identifier through training and using my own data. First, I initialized the webcam, canvas, and video in the setup() and draw() functions to make sure that they are running smoothly. I then added a couple of buttons for the classification of data and a button to train, mainly using:

```
classifier.train(whileTraining); // to train the data and console.log while training 
```
and
```
classifier.addImage('name');
```
for each of the buttons to associate each image with a specific object/name in my case. After loading the necessary files and making sure that it works, I started implementing my idea to identify people and load their data. To do that, I created my own JSON file/data set where I stored the information of each person, consisting of their name, age, and image. An example could be seen below:

```
{
    "name": "Alia",
    "age": "21",
    "image": "https://scontent.ffjr1-6.fna.fbcdn.net/v/t1.6435-9/100549657_878340159334094_2486094716383264768_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=AcSaY3NXflAAX9uuiYP&_nc_ht=scontent.ffjr1-6.fna&oh=00_AT9ITPShLdV4zJ5kcKJ0GxTAD2KSPTzCHdz7VBy7QWWCMQ&oe=62839580"
},
```
On load, I fetch this data and store it in an array to later be accessed and printed on the screen. Initially, I only printed the information on one side and had the video and buttons on the other side, to ensure that the functionalities are working, and then I moved to the design where I decided that I would have it look like an ID with the video in the location of the photo and the user data on the side.

The wireframe could be seen below:

![](images/wireframe.jpg)

In the gotResults() function, which occurs after the training is done and the user is identified in front of the camera, the printing of information occurs. I set the confidence level to be > 0.98 as this yielded to the most accurate results after some trial and error and if that's the case, I set a label to the name of that person to later be accessed for the printing of information. I then iterated over the array consisting of the information in the JSON file and when I found a name that is equal to that of the label, I printed the information of that person on the screen. I then set boolean variables of "canEnter" and "cantEnter" to true or false based on age, if a person is > 21 years old I set canEnter to true and cantEnter to false, and vice versa. And if its NA, set both to false. This data is later used in the draw function where a green overlay is shown if the user is > 21 years old, red if < 21 years old, and clear if NA.

Lastly, I added and commented out a few lines of code to be used for [saving](https://thecodingtrain.com/learning/ml5/4.1-save-load-model.html) the data but did not implement it as I wanted to finish everything on the spot as I kept my friends waiting. 

Below is the final display of the screen:
![](images/finalDisplay.jpg)
