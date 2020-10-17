export default function addMethodMissing(original) {
  const handler = {
    get(target, prop, receiver) {
      if (Reflect.has(target, prop) || prop === "methodMissing") {
        return Reflect.get(target, prop, receiver);
      }
      return function(...args) {
        return Reflect.get(target, "methodMissing").call(target, prop, ...args);
      };
    },
  };
  return new Proxy(original, handler);
}
