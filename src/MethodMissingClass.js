export default class MethodMissingClass {
  constructor() {
    const handler = {
      get: this._handleMethodMissing
    };
    return new Proxy(this, handler);
  }

  _handleMethodMissing(target, name, receiver) {
    const origMethod = target[name];

    // If it exist, return original member or function.
    if (Reflect.has(target, name) || name === "methodMissing") {
      return Reflect.get(target, name, receiver);
    }

    // If the method doesn't exist, call methodMissing.
    return function(...args) {
      return Reflect.get(target, "methodMissing").call(receiver, name, ...args);
    };
  }

  methodMissing(name, ...args) {
    console.log(
      `Method "${name}" does not exist. Please override methodMissing method to add functionality.`
    );
  }
}
