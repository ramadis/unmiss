export default function withMethodMissing(originalClass) {
  return class SafeClass extends originalClass {
    constructor(...args) {
      super(...args);
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
              return origMethod.call(target, ...args);
            }
          : target[name];
      }

      // If the method doesn't exist, call methodMissing.
      return function(...args) {
        return this.methodMissing.call(target, name, ...args);
      };
    }
  };
}
