# Unmiss 🔍

<img width="1088" alt="687474703a2f2f692e6375626575706c6f61642e636f6d2f53495344714b2e706e67" src="https://user-images.githubusercontent.com/2911971/141382997-5f948f7b-456f-42eb-ad0c-16ab9cc050a0.png">

**Unmiss** is a Ruby's `method_missing` implementation you can use in your javascript classes. Basically, it is a method that is called when no matching method is found. It gives you a way to intercept unanswerable messages and handle them gracefully. Learn more about `method_missing` [here](http://rubylearning.com/satishtalim/ruby_method_missing.html).

[![Build Status](https://travis-ci.org/ramadis/unmiss.svg?branch=master)](https://travis-ci.org/ramadis/unmiss)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/unmiss?color=green)
![npm](https://img.shields.io/npm/v/unmiss?color=green)
## Requirements
**Unmiss** uses ES6 `Proxies` to simulate `method_missing`, so it will only run on node versions greater or equal to 6.4.0. Currently, it does not support browsers.

## Installation

```bash
npm install --save unmiss
```

## Usage and Examples

There are multiple ways to use **Unmiss**: With ES6 class inheritance, by calling a high order function, using new shiny decorators, or wrapping an existing instance. Whichever way you prefer, add to your class a `methodMissing` method to generate an awesome safety net method.

Using a high order function:
```js
import { withMethodMissing } from 'unmiss'

class Example {
    methodMissing(name, ...args) {
        console.log(`Method ${name} was called with arguments: ${args.join(' ')}`);
    }
}

const instance = new withMethodMissing(Example);
instance.what('is', 'this');
> Method what was called with arguments: is this
```

Using a modern javascript decorator:
```js
import { withMethodMissing } from 'unmiss'

@withMethodMissing
class Example {
    methodMissing(name, ...args) {
        console.log(`Method ${name} was called with arguments: ${args.join(' ')}`);
    }
}

const instance = new Example();
instance.what('is', 'this');
> Method what was called with arguments: is this
```

Using ES6 classical inheritance:
```js
import { MethodMissingClass } from 'unmiss'

class Example extends MethodMissingClass {
    methodMissing(name, ...args) {
        console.log(`Method ${name} was called with arguments: ${args.join(' ')}`);
    }
}

const instance = new Example();
instance.what('is', 'this');
> Method what was called with arguments: is this
```
***ALERT:** If you choose to use the inheritance way, take into account that if you want to use a `constructor` in your class, you will have to call `super()` first.***

Wrapping an existing instance of a class:
```js
import { addMethodMissing } from 'unmiss'

class Example {
    methodMissing(name, ...args) {
        console.log(`Method ${name} was called with arguments: ${args.join(' ')}`);
    }
}

const instance = addMethodMissing(new Example());
instance.what('is', 'this');
> Method what was called with arguments: is this
```

## Contributing

Feel free to submit any issues and PRs you want. To run the project first install its dependencies:

```sh
npm install
```

Then build it and test it:

```sh
npm run build && npm run test
```
