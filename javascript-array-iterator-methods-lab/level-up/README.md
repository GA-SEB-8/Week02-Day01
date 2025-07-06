<h1>
  <span class="headline">JavaScript Array Iterator Methods Lab</span>
  <span class="subhead">Level Up</span>
</h1>


## 🚀 Level Up exercises: `Array.prototype.reduce()`

Try the following exercises if you completed the **Level Up** section of the Array Iterator Methods lesson on `.reduce()`

### Level Up exercise 1

```js
/*
Level Up exercise 1: Array.prototype.reduce()

Calculate the combined lifespan of all the inventors using 
Array.prototype.reduce()

- Each object in the array includes these properties: 
  'first', 'last', 'year' (birth year), and 'passed' (year of death).
- Use the Array.prototype.reduce() method to calculate the sum of the total 
  years lived by all the inventors.
- Store the total sum in the variable 'totalYearsLived'.

Hints:

- Inside the reduce callback function, calculate the lifespan of each inventor 
  (passed - year).
- Accumulate this lifespan in the 'totalYearsLived' variable.
- Remember, reduce takes a callback function and an initial value for the 
  accumulator.
*/

let totalYearsLived = 0;

// Complete the exercise in the space below:

// Check your work:
console.log('Level Up 1 my result: ', totalYearsLived);
console.log('Level Up 1 correct result: ', 861);
```

### Level Up exercise 2

```js
/*
Level Up exercise 2: Array.prototype.reduce()

Tallying travel methods using Array.prototype.reduce(). 

Count the number of times each travel method appears in the 'travelMethods'
array.

- The resulting object should have keys as the travel methods 
  ('car', 'truck', 'bike', etc.) and values as their respective counts.
- Store this object in the variable 'travelMethodCounts'.

Hints:
- Inside the reduce function, check if the travel method already exists as a key
  in your accumulator object. If it does, increment its count. If not, add it 
  to the object and give it a value of 1.
- Since you want to return an object, be sure to pass an empty {} for the 
  initial value of the "accumulator".
*/

let travelMethodCounts = {};

// Complete the exercise in the space below:

// Check your work:
console.log('Level Up 2 my result: ', travelMethodCounts);
console.log('Level Up 2 correct result: ', {
  car: 5,
  truck: 3,
  bike: 2,
  walk: 2,
  van: 2,
});
```

🚀 That's the end of the Level Up! Amazing work! 🚀
