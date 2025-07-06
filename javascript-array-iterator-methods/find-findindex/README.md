<h1>
  <span class="headline">JavaScript Array Iterator Methods</span>
  <span class="subhead"><code>.find()</code> & <code>.findIndex()</code></span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to use `find()` and `findIndex()` to search through an array.

## find

PURPOSE: Find an element within an array.

`find()` will return the *first* element that satisfies the provided testing function, and returns `undefined` if no match is found.

```javascript
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

const firstWhiteCar = cars.find((car) => {
  return car.color === 'white';
})
// firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}

const missingCar = cars.find((car) => {
  return car.color === 'black';
});
// missingCar = undefined
```

## findIndex

PURPOSE: Like `find()`, but returns the found element’s index. 

`findIndex()` is VERY similar to find, except it will return a numeric index value instead of the element itself. Instead of `undefined`, if no match is found `findIndex()` returns `-1`.

```javascript
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

const firstWhiteCarIdx = cars.findIndex((car) => {           
  return car.color === 'white';
});
// firstWhiteCarIdx equals 1

const missingCarIdx = cars.findIndex((car) => {
  return car.color === 'black';
});
// missingCarIdx = -1
```

