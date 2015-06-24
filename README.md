# js-lenses

## Installation

```
npm i js-lenses
```

## Usage

```javascript
var person = { name: 'John', children: [{ name: 'Elle'}, { name: 'Dirk' }] };

var nameLense = Lense.of('name'); // create lense
var dataNameLense = nameLense.from(person); // apply lense with data

dataNameLense.get(); // get value -> 'John'
dataNameLense.set('Jim') // set value -> { name: 'Jim' }

var childLense = Lense.compose(nameLense, Lense.of('children')).from(data); // compose lenses

children.set(children.get().map((child) => child.age = 11));

var firstNameChildLense = Lense.ofPath(['children', 0, 'name']).from(data); // or get from path

firstNameChildLense.get(); // -> 'Elle'
firstNameChildLense.set(Nora); // -> { name: 'John', children: [{ name: 'Nora'}, { name: 'Dirk' }] }
```
