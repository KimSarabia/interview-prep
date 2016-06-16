/**
  * @desc Bubble Sort
  * How to Remember: The smaller element goes to the top (beginning) of the array as a bubble goes to the top of the water.
  * Simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
  * Pseudocode: Loop through the list until no swaps are needed
  * @author CS50
*/


/**
  * @desc STEPS
  * Check if array was passed in correctly and if array is an array
  * When we know the array is valid, it will throw Error
  * Create an outer for loop, representative of the amount of times we need to traverse the array
  * We will make it length - 1 (second to last), because by the time we have gotten to the last index, it has been compared to the one in front of it
  * The inner loop is going to go through the entire array (second to last) and do comparitive operators and compare elements next to one another in the array
  * We are going to the element itself at x and look at the arr[x + 1]
  * We are then going to do a swap
  * If we notice that the one to the left is larger, we are going to note that there has been a change and then do a swaps
  * It is going to keep doing this until the largest numbers bubble to the right
*/
var bubbleSort = function(array) {
  if(arguments.length === 0 || !Array.isArray(array)){
    throw new Error();
  }
  var hasHadChange;
  for(var i = 0; i < array.length - 1; i++){
    hasHadChange = false;
    for(var j = 0; j < array.length -1; j++){
      if(array[j] > array[j + 1]){
        hasHadChange = true;
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    if(!hasHadChange){
      return array;
    }
  }
  return array;
};
console.log(bubbleSort([1111, 14, 56, 90, 1, 56, 2000, 4]));
