import { expect } from "chai";
import { addMethodMissing } from "../src/main";

describe("addMethodMissing", () => {
  let testInstance;

  class TestClass {
    constructor() {
      this.dummyMember = true;
      this.falseMember = false;
    }

    methodMissing(name, ...args) {
      return { name, args };
    }

    dummyMethod() {
      return true;
    }
  }

  // Catch, impossible to tell function from member

  beforeEach(function() {
    testInstance = new TestClass();
    testInstance = addMethodMissing(testInstance);
  });

  it("should create an instance", () => {
    expect(testInstance).to.exist;
  });

  it("should access its own methods", () => {
    expect(testInstance.dummyMethod()).to.equal(true);
  });

  it("should access its own members", () => {
    expect(testInstance.dummyMember).to.equal(true);
  });

  it("should call method missing", () => {
    expect(testInstance.inexistentMethod()).to.exist;
  });

  it("should access the method name from method missing", () => {
    const response = testInstance.inexistentMethod();
    expect(response.name).to.equal("inexistentMethod");
  });

  it("should access the method args from method missing", () => {
    const response = testInstance.inexistentMethod(true);
    expect(response.args[0]).to.equal(true);
  });

  it("should get every method args from method missing", () => {
    const response = testInstance.inexistentMethod(1, 2, 3, 4);
    expect(response.args.length).to.equal(4);
  });

  it("should return falsey setted members as they are", () => {
    expect(testInstance.falseMember).to.equal(false);
  });

  describe("nested methodMissing calls", () => {
    let nestedInstance;

    class NestedClass {
      constructor(fns) {
        this.fns = fns;
      }

      methodMissing(name) {
        return this.fns[name](this);
      }
    }

    it("works", function() {
      const result = "result";

      const fns = {
        first: (instance) => instance.second(),
        second: (instance) => instance.third(),
        third: () => result,
      };

      nestedInstance = new NestedClass(fns);
      nestedInstance = addMethodMissing(nestedInstance);

      expect(nestedInstance.first()).to.equal(result);
      expect(nestedInstance.second()).to.equal(result);
      expect(nestedInstance.third()).to.equal(result);
    });
  });
});
