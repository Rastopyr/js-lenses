# js-lenses

Composable, immutable getters and setters for plain JavaScript data structures.

## Installation

```
npm i js-lenses
```

## Usage

```javascript
var person = { name: 'John', children: { boys: [{ name: 'John'}, { name: 'Dirk' }] }};

var nameLense = Lense.of('name'); // create lense
var dataNameLense = nameLense.from(person); // apply lense with data

dataNameLense.get(); // get value -> 'John'
dataNameLense.set('Jim'); // set value -> { name: 'Jim' }

var childrenLense = Lense.compose(Lense.of('children'), Lense.of('boys')).from(person); // compose lenses

childrenLense.set(childrenLense.get().map((child) => (child.age = 11, child)));

var firstNameChildLense = Lense.ofPath(['children', 'boys', 0, 'name']).from(person); // or get from path

firstNameChildLense.get(); // -> 'John'
firstNameChildLense.set('Jim'); // -> { name: 'John', children: [{ name: 'Jim'}, { name: 'Dirk' }] }
```
