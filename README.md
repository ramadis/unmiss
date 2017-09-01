# Unmiss 🔍

![Unmiss example](http://i.cubeupload.com/SISDqK.png)

**Unmiss** is a Ruby's `method_missing` implementation you can use in your javascript classes. Basically, it is a method that is called when no matching method is found. It gives you a way to intercept unanswerable messages and handle them gracefully. Learn more about `method_missing` [here](http://rubylearning.com/satishtalim/ruby_method_missing.html).

[![Build Status](https://travis-ci.org/ramadis/unmiss.svg?branch=master)](https://travis-ci.org/ramadis/unmiss)

## Requirements
**Unmiss** uses ES6 `Proxies` to simulate `method_missing`, so it will only run on node versions greater or equal to 6.4.0. Currently, it does not support browsers.

## Installation

```bash
npm install --save unmiss
```

## Usage and Examples

There are two ways to use **Unmiss**: With ES6 class inheritance or the right way, using new shiny decorators. Whichever way you prefer, add to your class a `methodMissing` method to generate an awesome safety net method.

Using a modern javascript decorator (*recommended*):
```js
import { withMethodMissing } from 'unmiss'

@withMethodMissing
class Example {
    methodMissing(name, ...args) {
        console.log(`Method ${name} was called with arguments: ${args.join(' ')}`);
    }
}

const instance = new Example;
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

const instance = new Example;
instance.what('is', 'this');
> Method what was called with arguments: is this
```
***ALERT:** If you choose to use the inheritance way, take into account that if you want to use a `constructor` in your class, you will have to call `super()` first.*

## Contributing

Feel free to submit any issues and PRs you want. To run the project:

```sh
npm run build && npm run test
```
