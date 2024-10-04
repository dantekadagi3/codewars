
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0


int positiveSum(List<int> arr) {
  int sum = 0;
  
  if (arr.isEmpty) {
    return 0;
  }
  
  for (int i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Tests
void main() {
  print(positiveSum([1, 2, 3, 4, 5]));   // Output: 15
  print(positiveSum([-1, 2, -3, 4, 5])); // Output: 11
  print(positiveSum([]));                // Output: 0
}
