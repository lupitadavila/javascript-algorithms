// Bubble sort algorithm

// pseudocode:
// For all elements in array
// - swap first two elements if first > second
// Runtime: O(n^2)
function bubbleSort(arr){
  var temp;
   for (var i = 0; i< arr.length; i++){
     for(var j = 1; j< arr.length; j++){
       if(arr[j-1]>arr[j]){
           temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}


// Merge Sort

// pseudocode
// Divide array in half
// sort each half
// merge back together
// Runtime: O(nlog(n))
function mergeSort(arr){
  return arr;
}

// Selection Sort

// pseudocode
// Look through all elements in array
// - find smallest element
// - swap with the front
// Runtime: 0(n^2)

function selectionSort(arr){

}



// Loop through every element in array
function smallestNumber(arr){
  var smallest = arr[0];
  for(var i=0; i< arr.length; i++){
    if(smallest > arr[i]){
      smallest = arr[i];
    }
  }
  return smallest;
}
