// The Query Selector
// query.Selector is a method used to find the content of an element:

const heroImg = document.querySelector('img')
// This will search through the doc and select the first occurrence of "img"

// using a "." will select all items in a class:
let list1 = document.querySelector('.list1')
// using "[]" allows the user to select one element from a list:
let listItem2 = document.querySelector(list1[1])
// using "getElementById" selects items based on their id:
let firstHeading = document.getElementById('heading1')


// Changing Page Content:

// using the method "innerText" and "+=" allows the user to add content to a single tag:
let firstHeading = document.querySelector('');
console.log(firstHeading.innerText);
firstHeading.innerText += 'this is the new heading';

// the user can change the text in several tags at once using the "forEach" method:
let paragraphs = document.querySelector('');
paragraphs.forEach(paragraphs => {
  paragraphs.innerText += 'new test'
});

// Setting Attributes
// Using "getAttribute" the user can add attributes to a tag of their choice:

// this example is how to get an attribute to an existing tag:
let link1 = document.querySelector('a');
console.log(link.getAttribute('href'));

// this is an example of how to set an attribute:
link.setAttribute('href', 'https://www.test.com');

// Editing CSS Through the DOM
// "setAttribute" is also used to edit existing css:

title.setAttributes('style', 'margin: 50px', 'border: solid black')
// the user can also add css to existing css:
console.log(title.style);
title.style.margin = '50px';
// the user can use console.log to display the value of a css key word:
console.log(title.style.color)


// Adding and Removing Classes
// using "content" and "classlist" the user can change, add or remove a class:

// display the current class
letcontent = document.querySelector('p');
console.log(content.classList);
// Adding, using ".add" adds a class name
content.classList.add('error');
// Removing using ".remove" takes a class name away
content.classList.remove('error');