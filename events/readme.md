**Event-Driven User Interactions**

This project presents several event-driven user interactions that use both, the mouse as well as the right and left arrow keys on the keyboard. This website is meant to help people pick and create outfits from the items that they already have in their wardrobe, helping them visualize it when it's put together. As I really love babies, I decided to use images for baby clothing pieces, as I also haven't seen anything similar catering to baby outfits.

The link for the website could be found [here](https://aliawaleed.github.io/connectionsLab/events/index.html)

The webpage presents a gradient from pink to blue, the traditional baby colors, and a section in the middle for the clothes, with right and left buttons to control the images displayed for each. At the top, there is also a shuffle button that changes the outfit altogether. At the very bottom is another section that shows some toys and can be changed when the right and left arrow keys on the keyboard are pressed. To make it more playful, I decided to use a custom cursor that looks like a baby bottle and made sure it changes when hovering over the buttons so that the users are not confused. I had trouble including an image of my choice for the cursor and so opted for one that I found online and credited in my css file. 

The js file contains a lot of information as it controls all of the interactions seen on the screen and takes care of the images displayed, iterating over an array when the next or back buttons are clicked and making sure that when either end of the list is reached, it would start again from the other side. 
