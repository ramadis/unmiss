class SafeClass {
  constructor() {
    const handler = {
      get: this._handleMethodMissing,
    }
    return new Proxy(this, handler);
  }
  
  _handleMethodMissing(target, name) {
    const origMethod = target[name];
    if (origMethod) {
      return typeof origMethod !== 'Function' ?
             target[name] :
             function (...args) { origMethod(...args) };
    }
    
    return function(...args) { this.methodMissing(name, ...args) }
  };
  
  method() {
    console.log('method');
  }
    
  methodMissing(name, ...args) {
    console.log('Nombre', name);
    console.log('args', args);
  }
}