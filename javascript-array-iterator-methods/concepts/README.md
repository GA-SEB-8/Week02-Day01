<h1>
  <span class="headline">JavaScript Array Iterator Methods</span>
  <span class="subhead">Concepts</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to define array iterator methods and their purpose.

## What are array iterator methods

JavaScript arrays have lots of helpful built-in methods. One category of these methods are **iteration methods**, which operate on each item in an array, one at a time. 

These methods make use of **callback functions** to execute code for each iteration. 


## Why use array iterator methods

Array iterator methods allow you to write more **declarative/functional** code as opposed to **imperative** code. 

We can write code that describes what we want it to do: 

```javascript
// find an element in an array:

array.find((element) => {
  // search criteria 
});
```

How are we iterating? We don’t need to worry about that! We just tell the computer to iterate over the array, and it does it.

