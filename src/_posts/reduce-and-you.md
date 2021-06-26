---
title: Array Reduce and You
summary: A bird's eye view of Array.reduce() including some real world use cases
slug: reduce-and-you
tags:
  - JavaScript
  - Explained
---

# Array Reduce and You
If you've been writing JavaScript for a little while, you're probably familiar with arrays. You can loop them, push them, pop them, and much more! For the uninitiated, arrays are super useful and come up pretty often in front-end development. Imagine you have a list of blog posts or images you want to render on a page. They will likely show up in an array from whatever data source you are using. ES6 included some useful array methods to help you handle your arrays in a functional manner, namely Map, Filter and Reduce. 

Reduce tends to be confusing for a lot of newer developers, mainly due to the fact that it is extremely versatile in what it can return. The other newer array methods are relatively straight forward. The `map` method returns a new array, with its items directly "mapped" from the original array. `filter` returns a new array, which is a subset of the original array. Reduce can return a number of different things, depending on how you are using it. 

Some examples of what you can use `reduce` for are: return a flat array from an array of nested arrays or calculate a total or an average. I like to think of it as taking a source array, and "reducing" it somehow. 

For me, a lot of the confusion around reduce comes with how all the documentation deal with defining the method. From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), (highly reccomend reading through that link) `Array.reduce` is defined as follows:
```javascript
reduce((accumulator, currentValue) => { ... } )
reduce((accumulator, currentValue, index) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... } )
reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
```
These parameter names make sense if I'm trying to find a total of an array of numbers. Consider the followig example:
```javascript
// inches of rain each day
const rainPerDay = [1.2, 0.4, 2.1, 0.1, 0, 1.0, 0.2];

// total inches of rain for the week
const totalRain = ???
```
We can get a value for `totalRain` a few different ways. 
```javascript
// change totalRain to a 'let' declaration
let totalRain = 0;

rainPerDay.forEach((inches) => {
  totalRain += inches;
});

// totalRain = 5.000000000000001 or just 5
```
That code makes sense, but involves mutating a global variable, which may be changed before you have the chance to use it. 
Using `reduce` can let us refactor the code to:
```javascript
const totalRain = rainPerDay.reduce((total, inches) => {
	total += inches;
	return total;
}, 0);

// totalRain = 5
```

That example uses the first option defined in MDN definition of `reduce`: `reduce((accumulator, currentValue) => { ... } )`, but also includes `initialValue` as seen in the last definition. `Accumulator` refers to whatever is returned from the function passed to reduce, `total` in our example above. If we left of the `initialValue`, the first item in the array would be used instead, and `currentValue` would be the second item in the array. The callback function is then called for each item in the array, returning the `accumulator` each time. For our example, `initialValue` is 0, which is used as the initial value for our accumulator, `total` and on the first iteration, you add the first item of `allColors`, `1.2` and return the result is returned. That returned value is then used as `total` in the following iterations until all the items are accounted for. We can get the average rainfall for the week in a similar manner:
```javascript
// inches of rain each day
const rainPerDay = [1.2, 0.4, 2.1, 0.1, 0, 1.0, 0.2];

let totalRain = 0;

rainPerDay.forEach((inches) => {
  totalRain += inches;
});

const average = totalRain / rainPerDay.length;
// average = 0.7142857142857144
```

Or with `reduce`...
```javascript
const average = rainPerDay.reduce((total, inches, index, array) => {
  total += inches;
  if(index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
}, 0);
```

Be advised, using `reduce` for something like our simple totaling or averaging use cases, isn't really necessary. It uses the same number of lines, and may be harder to understand at a glance when you refer to the code in the future. 

For another example, let's say we have an array with other arrays inside. At work, I had to connect to the Jira API, and if you get a response consisting of an issue, the issue description is structured as the following:
```javascript
{
  issue: {
    ...,
    description: [
      ...,
      {
        ...,
        content: [
          type: "text",
          text: "this is an issue"
        ]
      },
      ...
    ]
  }
}
```
The `description` field holds an array of objects, each with few different properties, one of which is `conent`. `Content` itself is an array of objects, each with type and text properties. The front-end app I was building didn't know how many items each array would contain. Ultimately, I would want to display the description text in a `<p>` tag, but looping over each level of arrays led to confusing code. 

Tackling this problem, I first tried to create a temporary variable while looping over `description` to store the different values inside `content.text`. Let's see how that might look.

```javascript
let description = "";
issue.description.forEach((desc) => {
  desc.content.forEach((line) => {
    if(line.type === "text") {
      description += line.text + " ";
    }
  });
  description += "\n";
});
```
This solution may be fine, but it involves a global variable as well as the fact that it takes a second to read and figure out what's going on with the code.

Using `reduce` gives us:
```javascript

const description = issue.description.reduce((desc, line) => {
  desc += line.content
    .filter(item => item.type === "text")
    .map((cont) => cont.text).join(" ") + "\n";
  return desc;
}, "");
```

This example uses `filter` and `map` to help deal with the nested array withing each description item. We're startig out with an empty string, and for each item in the outer array, we concatenate a new line, then we call `filter` to return values that have `type` equal to "text", and call `map` to return an array of just `text` properties, and we combine all of those values into a string with `.join(" ")`. This string is concatenated to the accumulator `desc` and is then returned. 

Both examples acheive the same result, and their "readability" is ultimately up to you and the team you may work with. I prefer to use reduce in conjunction with descriptive variable names when writing TypeScript (assuming proper types are in place) because I can always use VS Code's TypeScript support to tell me what each variable is in the context of the greater data structure when I forget exactly what I wrote. Sometimes it is better to just write a `forEach` loop or combine `map` and  `filter` with a global variable for readability's sake. It's ultimately up to you, but being able to read and understad others' code, which may include `reduce` is an necessary tool to have in your belt. 

To recap, `reduce` is an array method used to "reduce" an array to a simpler value, whether that be a total, average, or concatenated string. It can also be useful when dealing with API responses that may include more data than is necessary for you front-end to deal with. `Reduce` takes up to two parameters, the first being a callback function, the second is the initial value supplied to the callback function. The callback function itself can take up to four parameters, an `accumulator`, the `currentValue`, the `currentIndex` within the array, and `sourceArray` itself. An important thing to remember is that the callback function must return a value to be used as the `accumulator` for the next iteration. 

That's all I have for now. If you have any questions, comments or corrections, please do not hesitate to contact me via the contact form found [here](https://mikecurry.dev#contact) or on Twitter [@mikedubcurry](https://twitter.com/mikedubcurry).

Until next time,

Michael