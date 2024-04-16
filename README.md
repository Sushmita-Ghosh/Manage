# Memory Mojo 🧠✨
Welcome to Memory Mojo, the ultimate memory game that will challenge and entertain you with its vibrant gameplay and brain-boosting fun!

## Technology Used
Memory Mojo is built with the following technologies:

* React: The game's user interface is developed using React, providing a responsive and interactive experience.
* Lottie: Animations in Memory Mojo are powered by Lottie, allowing for seamless and engaging visual effects.
* Tailwind CSS: The game's styling is implemented with Tailwind CSS, enabling rapid development and easy customization of design elements.

## How to Play
* Click on two cards to flip them over.
* Try to remember the card positions and match pairs.
* Match all the pairs and check in how many moves you did it !

## Deployment:
The app is deployed [here](https://memory-mojo.vercel.app/).

## Get Started:
1. Clone the repo
2. npm install
3. npm run dev
4. The app opens at http://localhost:5173/.

## Learnings:
Shuffle Cards Logic

1. First we need to duplicate the cardArray --> then apply Math.random (to sort it in a random manner) --> then we are mapping over each and adding id --> duplicated 6\*6

2. Math.random returns a number between 0 and 1, by subtracting 0.5 we make sure that the number is negative half of the time, as the sort function sorts on the basis of greater or less than zero.

3. Fisher Yates Algorithm to shuffle the array - [Ref]()

   - Start from the last element and swap one by one. We don't need to run for the first element that's why i > 0.
   - Swap arr[i] with the element at random index

4. Why are we keeping a matched value in each of the cardArray element ?

   - The reason is when we have 2 choices (choiceOne and choiceTwo) - we can set the matched value for these two to be true.

5. Why are we using useEffect to write the compare cards logic?
   - This is necessary as state updated are async in nature, so we need to ensure that we keep track of choiceOne and choiceTwo as fire the useEffect whenever anyone of them updated. We can handle the logic of each of them having values inside useEffect.
6. What is the flipped prop for?
   - The flipped prop is for applying a class which will resemble the card flip,
   - The card should remain flipped under 3 condition
     - if it's choiceOne
     - if it's choiceTwo
     - if they are matched i.e; or the matched property is true
7. Why are we using setTimeout ?

   - if we don't we will not be able to see the cards that don't match

8. Why we need the disabled prop ?
   - The disabled prop is to ensure that we should not be able to make achoice if two choices are made - we want the cards tp turn over
     only then we can make another choice.
9. Why are we setting the choiceOne & choiceTwo as null before setting the cards?

   - It because say an user selected one card and clicked on "New Game" but that card is still his choiceOne - which is not correct , henec we need to make these null when we start a new game.
