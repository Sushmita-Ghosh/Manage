# Memory-Mojo

### Learnings:

Shuffle Cards Logic

1. First we need to duplicate the cardArray --> then apply Math.random (to sort it in a random manner) --> then we are mapping over each and adding id --> duplicated 6\*6

2. Math.random returns a number between 0 and 1, by subtracting 0.5 we make sure that the number is negative half of the time, as the sort function sorts on the basis of greater or less than zero.

3. Fisher Yates Algorithm to shuffle the array - [Ref]()

   - Start from the last element and swap one by one. We don't need to run for the first element that's why i > 0.
   - Swap arr[i] with the element at random index

4. Why are we keeping a matched value in each of the cardArray element ?
   - The reason is when we have 2 choices (choiceOne and choiceTwo) - we can set the matched value for these two to be true.
