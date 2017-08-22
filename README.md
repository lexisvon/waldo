# Waldo

Your task is to build a game where the user is shown a photo with lots of characters in it, and they must find Waldo.

This is Waldo:

![](https://cl.ly/j87h/Screen%20Shot%202017-02-13%20at%206.47.18%20AM.png)

And this is where Waldo is in a photo with lots of characters:

![](https://cl.ly/j87s/Screen%20Shot%202017-02-13%20at%206.46.23%20AM.png)

There are lots of _Where's Waldo_ photos to choose from [on Google](https://www.google.com/search?q=where%27s+waldo&source=lnms&tbm=isch&sa=X&ved=0ahUKEwin9fX_jY3SAhVo4IMKHU1FCF0Q_AUICCgB&biw=1440&bih=799). Maybe start with an easy one, since your first step is to find Waldo yourself. :)

## Examples

You can see how the finished product looks by visiting some demos:

- https://damp-plateau-96949.herokuapp.com/puzzles/1
- http://dna-wheres-waldo.herokuapp.com/
- https://hidden-sierra-6699.herokuapp.com/
- https://weeping-walleye.herokuapp.com/

You might notice that these demos have additional functionality, but you're only being tasked with what's described below.

---

## The Spec

You'll be using HTML, CSS, JavaScript, AJAX, and some server-side functionality (your choice--Sinatra, Rails, PHP, etc) with a persistent data store (e.g. a CSV file). Here is a high-level set of steps for approaching this assignment:

### 1. Make a Plan

Review the rest of this spec, and think about how you'll approach it. Talk it through with another person--see if their questions about the approach cause you to gain more clarity. Do the same for them or another person.

### 2. Clicking on a Photo

Start with an easier problem: When the user clicks on a photo, log out to the Console the X/Y coordinates of their click.

This will only require HTML and JavaScript, and it'll set up a foundation for you to work from.

### 3. Visual Feedback

Check out the demos linked above. Notice how each demo has a slightly different take on what visual feedback is provided to the user... from little squares that are placed around the location that the user clicked, to modal windows revealing the success/failure of a click.

Build the functionality for your visual feedback (Keep it simple, at least at first). There's no need for server-side integration yet. Just test out that you can run a function to create your visual feedback.

### 4. Character Locations

This is the beginning of your server-side functionality. Start by creating your data store. It is probably very simple for now: Just the X and Y coordinates of where Waldo actually is.

### 5. Location Validation

Your server's job will be to validate whether the coordinates that a user clicked on are close enough to Waldo's location. If they are close enough, the server should send back a message indicating success. Otherwise, it should send back a message indicating failure.

### 6. Tie it all together!

Use AJAX to send requests to the server each time a user clicks on the photo. Based on the response from the server, show some kind of visual feedback to the user. End the game once Waldo has been found.

### 7. Timing

Add a feature that times how long it takes the user to find Waldo (starting from when they first load the page). Display their time (which is basically their "score") somewhere on the page. It should be a live timer, so they can feel the pressure.

### 8. High Scores

Save all of the times/scores to a data store, so that you can add a dynamically generated list of high scores to the website.

---

<small>Credit: [The Odin Project](http://www.theodinproject.com/)</small>