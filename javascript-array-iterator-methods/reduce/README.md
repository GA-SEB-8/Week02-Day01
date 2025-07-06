<h1>
  <span class="headline">JavaScript Array Iterator Methods</span>
  <span class="subhead"><code>.reduce()</code></span>
</h1>

PURPOSE: Reduce an array into a single value. Note that the “single value” can be a single object, array, or string.

`reduce()` is unique from the other array iterator methods we've seen so far in that it has a more complex callback function syntax: 

The function is called with the following arguments: 

```javascript
array.reduce((accumulator, currentValue, currentIndex, array) => { function body }, initialValue);
```

1. `accumulator` - The value returned from the previous callback function. On the first call, this value is set to `initialValue`. 
The accumulator argument is crucial - it is how `reduce()` is able to keep track of a value throughout the entire iteration process. 

2. `currentValue` - The value of the current element. This operates the same as the `element` argument in other array iterator methods like `map` and `filter`.

3. `currentIndex` (optional) - The index position of the `currentValue`.

4. `array` (optional) - The array `reduce()` was called on.


### Sum up the numbers in an array

```javascript
const nums = [25, 5, 100, 10];

let sum = nums.reduce(function(accumulator, num) {
  return accumulator + num
}, 0);

// sum equals 140

/*--- using an arrow function for the callback ---*/
let sum = nums.reduce((acc, num) => acc + num, 0);
```

### Count votes

```javascript
let votes = ['Yes', 'No', 'Yes', 'Yes', 'No'];

let tally = votes.reduce(function(acc, vote){
  if(acc[vote]){
    acc[vote] = acc[vote] + 1;
  } else {
    acc[vote] = 1;
  }
  return acc;
}, {});

// tally is { 'Yes': 3, 'No': 2 }
```

Let's break this example down together.

1. `reduce()` is called on the votes array.
2. It takes two arguments: `acc` (the accumulator) and `vote` (the current array element).
3. `acc` starts as `{}` and eventually becomes the tally object.
4. The function checks if `acc[vote]` exists. `acc[vote]` refers to the property of acc whose key is the current vote ('Yes' or 'No').
5. If `acc[vote]` exists, it means this vote type has been encountered before, so the function increments the count: `acc[vote] = acc[vote] + 1`.
6. If `acc[vote]` does not exist (which is true the first time a particular vote type is encountered), it sets `acc[vote] = 1`.
7. After modifying acc, the function returns it. This returned value becomes the acc for the next iteration.
8. After `reduce()` has processed all elements in the votes array, the final value of acc is assigned to `tally`.
9. `tally` is an object that contains the count of each vote type: { 'Yes': 3, 'No': 2 }.


While it is true that `reduce` COULD be used to handle the same tasks as almost all of the other examples you’ve seen in this module, best practice is to stay focused on what `reduce` truly excels at, which is reducing an array down to a single value - an object, a number, a string, etc. 