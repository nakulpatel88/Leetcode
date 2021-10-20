/*
Goal: find min  number of swaps

First find the number of 1s in array. This will tell us the length of our window we need.

We need to find a window with least number of 0s (or most 1s) so that we can replace them with 1s we get all 1s grouped together.



*/



/*
Another problem:
Minimum adjecent swaps to move all 1s to left or to the right.

Do two calculations, and return the min.

Calculation:
Loop through and for every 1, check how many steps it will take to move it to one side.
Steps will be current number of 0s on that side at that iteration.
*/