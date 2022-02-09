# EVENT-DRIVEN USER INTERACTIONS

## Project Name

[Baby Outfit Picker](https://aliawaleed.github.io/connectionsLab/events/index.html) 

## Project Description

This website presents an outfit picker that helps mothers put together outfits for their babies based on items that they have in their closets. It helps them visualize it when it’s put together and doesn’t require any actions from them in terms of looking for and remembering what the baby has. The project exhibits several event-driven user interactions that use both, the mouse as well as the right and left arrow keys on the keyboard. This example is just a prototype for a larger idea where the images chosen are found online but could easily be changed into images of clothing pieces taken on white backgrounds or from the online stores’ websites. This website could easily be expanded to incorporate clothes for any member of the family. I chose babies, however, as I have never seen anything similar that caters to baby outfits.


## Process and Evaluation

I started off by picking the theme for the website, which takes into account the typical baby colors of pink and blue, and so it presents a gradient from top to bottom with both colors. I then went ahead and found images that would work, removed white backgrounds from pictures that had, and tried to find items that could potentially be put together. This process took some time as I was looking for images without watermarks, shadows, and backgrounds. After adding them in arrays, I created the divs/sections and set up the javascript code to move between the images, adding right and left arrows next to the tops where the right would go next and the left would go back. I then used the same code and amended it for the bottoms and the shoes. As the website looked a bit empty to me and the clothes would sometimes blend with the background color, I solved this problem by adding a translucent section in the middle that the items were placed on and could easily be differentiated.

The JS file contains a lot of information as it controls all of the interactions seen on the screen and takes care of the images being displayed, iterating over an array when the next or back buttons are clicked and making sure that when either end of the list is reached, it would start again from the other side. It also contains information needed for playing and pausing music. This is seen on the website at the very bottom, where the baby gets to choose the toy, the mother could also play some music for them and pause it whenever she wants. This is done using the play or pause button with their instructions.  

To help the users even further, I put a shuffle button at the top that changes the outfit altogether. As I had trouble randomizing the items, I made sure to have them all change at the same time and had a different number of tops and bottoms so that the full outfit is not repeated. To include the children in the process, I added a section at the bottom where they could choose their own toys, using the right and left arrow keys on the keyboard and put instructions for the adults. To make the website more playful and interactive, I decided to use a custom cursor that looks like a baby bottle when hovering over the buttons so that the users are not confused. I had trouble including an image of my choice for the cursor and so opted for one that I found online and credited in my CSS file.
