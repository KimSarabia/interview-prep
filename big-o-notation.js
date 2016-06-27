/**
  * @desc Big O Notation
  * How to talk about speed of problems
  * ALL THAT MATTERS: Size of the input string is all that matters (other things like browser, hardware, etc.)
  * Linear Complexity O(n) -> Big Oh En
* Logarithmic Complexity O(log(n))
  * The goal is to always make it as flat as possible

  * @author Dave Smith, Mountain West
*/

//Limits(the calculus kind)

/*
| Notation  |    Name     |
+-----------+-------------+
| O(1)      | Constant    |
| O(log(n)) | Logarithmic |
| O(n)      | Linear      |
| O(n²)     | Quadratic   |
| O(2n)     | Exponential |
+-----------+-------------+
*/

/*
Constant Complexity O(1)
+--------------------------------+
|                                |
|                                |
|                                |
|                                |
|                                |
|                                |
+----x-----x------x------x-----+ |
|                                |
|                                |
+--------------------------------+
*/

/*
Linear Complexity O(n)
Same complexity class
Bigger input means longer runtime in a linear fashion
Steps in your algorithm
Big inputs
*/

/*
Logarithmic Complexity O(log(n))
Can we change complexity?
Yes, but we have to make assumptions
For every step of the algorithm, bisect the string in half, divide it in half
We are dividing the work in half by each step, and double the size of the input and add a step
*/
