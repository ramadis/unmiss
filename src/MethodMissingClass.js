export default class MethodMissingClass {
  constructor() {
    const handler = {
      get: this._handleMethodMissing
    };
    return new Proxy(this, handler);
  }

  _handleMethodMissing(target, name) {
    const origMethod = target[name];

    if (name in target || name === "methodMissing") {
      // If it exist, return original member or function.
      const isFunction = typeof origMethod === "function";
      return isFunction
        ? function(...args) {
            return origMethod(...args);
          }
        : target[name];
    }

    // If the method doesn't exist, call methodMissing.
    return function(...args) {
      return this.methodMissing(name, ...args);
    };
  }

  methodMissing(name, ...args) {
    console.log(
      `Method "${name}" does not exist. Please override methodMissing method to add functionality.`
    );
  }
}
