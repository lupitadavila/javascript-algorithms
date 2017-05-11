// Bubble sort algorithm

// pseudocode:
// For all elements in array
// - swap first two elements if first > second
// Runtime: O(n^2)
function mergeSort(arr){
  for(var i= 0; i < arr.length; i++){
    for(var j=1; j< arr.length; j++){
      if (arr[i] > arr[j]){
        // swap elements
        arr[i] = arr[i] ^ arr[j]
        arr[j] = arr[i] ^ arr[j]
        arr[i] = arr[i] ^ arr[j]
      }
    }
  }

  return arr;
}


var arr1 = [10,8,3,9,7,8,7];

var result = mergeSort(arr1);
