h-html
======

A library to quickly create virtual nodes for Composi using HTML tag names instead of Composi's h function. It enables you to use a simpler syntax for hyperscript using tag names. This is a great choice for those who do not like using JSX for defining component markup.

Installation
------------

Open your terminal and `cd` to your project. Then run:

```bash
npm i -D h-html
```

Call Singature
--------------

All tag methods take two arguments:

1. An object for properties/attributes
2. A child or array of children

If the tag has no properties, just provide an empty object: `{}`. You could also pass `null`, but two curly braces is shorter.

In the example below we pass an empty object for properties and a string as the child.

```javascript
h1({}, 'The Title')
```

This will result in:

```html
<h1>The Title</h1>
```

Here we give the tag a class and a title attribute:

```javascript
h1({class: 'main-title', title: 'This is the title'}, 'The Title')
```

This will result in:

```html
<h1 class='main-title' title='This is the title'>The Title</h1>
```

Import All Tags
---------------

Since this uses ES6 imports, if you need to use a lot of tags, you can simplify the import using an alias:

```javascrpt
import * as tag from 'h-html'

function title(message) {
  return tag.nav(
    {},
    tag.h1({}, 'The Title')
  )
}

// Define list:
function list(data) {
  // Define list Item:
  function listItems(data) {
    return data.map(item => tag.li({}, `Item ${item}`))
  }
  return tag.ul(
    {class: 'list'},
    listItems(data)
  )
}
// Render list:
render(list(['One', 'Two', 'Three']), 'article')
```

Use with Composi
----------------

After installing `h-html` you can start using it with Composi. Below is an example:

```javascript
import {h, render} from 'composi'
import {div, nav, h1, ul, li} from 'h-html'

// Define the title:
function title(message) {
  return nav({}, h1({}, `Hello, ${message}!`))
}
// Render the tag:
render(title('World'), 'header')

//******//
// List //
//******//

// Data for list component:
const fruits = ['Apples', 'Oranges', 'Bananas']

// Create list items:
function listItems(data) {
  return data.map(item => li({}, item))
}

// Define list component.
// Pass it listItems function:
function list(data) {
  return ul(
    {class: 'list'},
    listItems(data)
  )
}

// Render list:
render(list(fruits), 'section')
```

Notice how we had to break out the list items as a separate function. With JSX you can include an array with `map` inside curly braces. With hyperscript functions you need to define a separate function to do that. That's because `h` is expecting either a primitive value as a child (string, number, boolean), or an array of children. 

ES6
---
You could refactor the above example to use ES6 arrow functions for more concise code:

```javascript
import {h, render} from 'composi'
import {div, nav, h1, ul, li} from 'h-html'

// Define the title:
const title = message => nav({}, h1({}, `Hello ${message}`))

// Render the tag:
render(title('World'), 'header')

//******//
// List //
//******//

// Data for list component:
const fruits = ['Apples', 'Oranges', 'Bananas']

// Create list items:
const listItems = data => data.map(item => li({}, item))

// Define list component.
// Pass it listItems function.
const list = data => ul(
  {class: 'list'},
  listItems(data)
)

// Render list:
render(list(fruits), 'section')
```