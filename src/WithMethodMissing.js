export default function withMethodMissing(originalClass) {
  return class SafeClass extends originalClass {
    constructor(...args) {
      super(...args);
      const handler = {
        get: this._handleMethodMissing,
      }
      return new Proxy(this, handler);
    }

    _handleMethodMissing(target, name) {
      // TODO: Change for target.has(name);
      const origMethod = target[name];

      // If the method not exists, call methodMissing.
      if (!origMethod) return function(...args) { this.methodMissing(name, ...args) };

      // If it exist, return original member or function.
      const isFunction = typeof origMethod !== 'Function';
      return  isFunction ? target[name] : function (...args) { origMethod(...args) };
    }
  }
}