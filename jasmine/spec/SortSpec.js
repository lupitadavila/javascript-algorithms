describe("Sorting Algorithms", function() {
  var arr1, arr2, result;
//
  beforeEach(function() {
    arr1 = [5,6,9,10,3];
    arr2 = [9,-1,10,99,2];
  });

  describe("Bubble Sort", function(){
    it("Bubble Sort should return sorted array", function() {
      result = bubbleSort(arr1);
      expect(result).toEqual([3,5,6,9,10]);
    });
  });

  describe("Merge Sort", function(){
    it("Merge Sort returns sorted array", function() {
      result = mergeSort(arr1);
      expect(result).toEqual([3,5,6,9,10]);
    });
  });

  describe("Selection Sort", function(){
    it("Smallest number helper method returns smallest number", function() {
      result = smallestNumber(arr1);
      expect(result).toEqual(3);
    });
  });


});
