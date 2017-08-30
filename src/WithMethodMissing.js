@gang('The Warriors', 'Coney Island')
class Group1 {
  constructor(){
  }
  
  methodMissing() {
    return "hola"
  }
}


@gang('The Riffs', 'Gramercy Park')
class Group2 {
  constructor(){

  }
}


@gang('Turnbull ACs', 'Gunhill')
class Group3 {
  constructor(){

  }
}


function gang(name, location) {

 function _handleMethodMissing (target, name) {
    const origMethod = target[name];
    console.log(name)
    if (name === 'prototype') return target[name];
    // If the method not exists, call methodMissing.
    console.log(target)
    if (!origMethod) return function(...args) { this.methodMissing(name, ...args) };

    // If it exist, return original member or function.
    const isFunction = typeof origMethod !== 'Function';
    return  isFunction ? target[name] : function (...args) { origMethod(...args) };
  }
 return function(target) {
    console.log('decorated');
    const handler = {
      get: _handleMethodMissing,
    }
    
    return new Proxy(target.prototype.constructor, handler);
  }

}

const g = new Group1();
console.log('location=',g.location())