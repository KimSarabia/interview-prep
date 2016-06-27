/*
MERGE SORT

* Complexity of O(n log n)
* Stable Sort
* Fun Fact: Firefox and Safari use merge sort for their implementation of Array.prototype.sort().
* For rearranging lists (or any other data structure that can
only be accessed sequentially, e.g. file streams) into a specified order. It is a particularly
good example of the divide and conquer algorithmic paradigm. Merge sort has an
average and worst-case performance of O(n log(n)).
EXPLANATION

* Recursion divide the unsorted list into n sublists, each containing 1 element
* A list of one element is considered sorted
* Repeatedly Merge sublists until there is only 1 sub list remaining
* This will be sorted
*/

//JAVASCRIPT EXAMPLE

function mergeSort (arr) {
    if (arr.length < 2) return arr;

    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0,mid));
    var subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (a,b) {
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}

var test = [1,2,9,3,2,5,14,0];
console.log(mergeSort(test));
