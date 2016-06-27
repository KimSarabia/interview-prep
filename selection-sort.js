// Assume the first item is the smallest value.
// Compare this item to the second item.
// If the second item is smaller than the first, set the second item as the new minimum.
// Continue until the end of the data set is reached.
// If the minimum value is not the item you started with, swap them.



//The selection sort uses the same swap() function as the bubble sort:

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
//An implementation of selection sort is pretty easy. Similar to bubble sort, it uses two loops to accomplish the task (ultimately resulting in the O(n2) complexity):

function selectionSort(items){

    var len = items.length,
        min;

    for (i=0; i < len; i++){

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
    }

    return items;
}
