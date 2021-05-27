export default function addMethodMissing(original) {
  const handler = {
    get(target, name, receiver) {
      if (Reflect.has(target, name) || name === "methodMissing") {
        return Reflect.get(target, name, receiver);
      }
      return function(...args) {
        return Reflect.get(target, "methodMissing").call(receiver, name, ...args);
      };
    },
  };
  return new Proxy(original, handler);
}
