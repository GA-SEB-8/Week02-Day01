<h1>
  <span class="headline">JavaScript Array Iterator Methods</span>
  <span class="subhead">Callback Functions</span>
</h1>

**Learning objective:** By the end of this lesson, students will gain a deeper understanding of the common callback function syntax used with array iterator methods.

Every array iterator method in this module (with the exception of `reduce()`) has the same callback function signature. 

Let's use `.map()` as an example: 

```javascript
// callback function parameters
array.map((element, index, array) => {

});
```

1. `element` - The current element
2. `index` - The index of the current element (optional)
3. `array` - The array the iterator method was called upon (optional, and you probably won't ever use it)

Remember, the callback function we write will be called once for each element in the array. Under the hood, the engine will be passing arguments for each of these three parameters once for every iteration through the array. 

An easy way to examine what these parameters correspond to is to log the values: 

```javascript
const array = ['apple','banana','orange'];

const mappedArray = array.map((element, index, array) => {
  return `element is: ${element}, index is: ${index}, array is ${array}`;
});

console.log(mappedArray)
// [ 'element is: apple, index is: 0, array is apple,banana,orange',
//   'element is: banana, index is: 1, array is apple,banana,orange',
//   'element is: orange, index is: 2, array is apple,banana,orange' ]
```

As we loop through the array, `element` is being supplied different values as an argument. The `index` is also changing as we move through the array. The `array` itself is static, as it always references the array itself! 

<br>

📚 A note on parameter naming: 

It is considered best practice to choose a clear, singular name for the `element` parameter. If dealing with an array called `students`, then the singular `student` is a logical choice.

```javascript
const students = [];

let mappedArray = students.map((student) => {
  
});
```

## `index`

So, what use is the `index` parameter? Often, we won't need it. It's very common to leave both the `index` and `array` parameters off the signature entirely. 

Let's say we wanted to filter an array so that only the odd indexed elements were kept in our new array. With only the current `animal` element this would be a bit tricky, but with the `index` supplied it's a relatively light task: 

```javascript
const animals = ['chicken', 'goat', 'pig', 'sheep', 'cow'];

const oddAnimals = animals.filter((animal, index) => {
  if(index % 2) return animal;
});

console.log(oddAnimals);
```

That said, you won't use `index` much. It's just nice to know it's available in case you do want it!
