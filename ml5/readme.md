# Trying out ML5

## Project Name
21+ Entrance Only

## Project Description and Inspiration
This application identifies the person standing in front of their camera, loading in their name, age, and image. If the person is < 21 years old, they are notified that they are under age and cannot enter. When thinking about what kind of data to train for identification, I thought about the eye ID that we use to enter through the airports at the UAE. This inspired me to train data that would allow entrance to a place that only allows people who are 21+ to enter.

## Process and Learnings
The project uses ml5 to train the data and so the first thing I did was read through the [ml5 documentation](https://learn.ml5js.org/#/) and watched Daniel Schiffman's [introductory video](https://thecodingtrain.com/learning/ml5/0.1-introduction.html) to understand what ml5 does and how it works. Next, I used [boiler plate](https://github.com/ml5js/ml5-library/tree/main/examples/p5js/ml5Boilerplate/ml5Boilerplate_Version) code that he referenced to load in ml5 and p5 to later be used in the code. I then followed along with 3 of his other videos to begin training the data and get ml5 to work and get an understanding of what ml5 does in the background and what I would need to do. The first video helped me understand how [object detection](https://thecodingtrain.com/learning/ml5/1.3-object-detection.html) occurs, first with preloading images that exist and later using the webcam to identify the object. This led me to look into COCO-ssd which is the model used for the project in the video. The model detects and identifies objects that are previously defined in a large-scale object-detection, segmentation, and captioning dataset; COCO dataset. Meaning that this video used a pre-trained model to identify specific classes of objects that are saved on the data set. 

Since I didn't want to apply the code blindly and wanted to understand more of the concepts and theory, I watched another video that Dan Schiffman had to explain the process behind [transfer learning](https://thecodingtrain.com/learning/ml5/2.1-transfer-learning.html). I learned that MobileNet is the pretrained model used that's trained on a database of millions of images called ImageNet. When an image/object is detected, MobileNet returns a label that identifies the object and a confidence/probability score of what the object could be. To be able to train my own model, I needed to understand how the neural network works to process data and move to the following layer until features are identified. We then convert the Feature Extractor to a classifier to train with my own images/data.


## Evaluation



https://thecodingtrain.com/learning/ml5/3.1-feature-extractor-classification.html feature extraction

https://thecodingtrain.com/learning/ml5/4.1-save-load-model.html to save the trained model
