// import { sayHello } from "../src/say-hello";

import { introduction } from "../src/say-hello";

// // describe("Hello", function () {
// //   test("return Hello Rifaldi", function () {
// //     expect(sayHello("Rifaldi")).toBe("Hello Rifaldi");
// //   });
// // });

describe("Introduction", function () {
  test("Return FristName and LastName", function () {
    expect(introduction("Rifaldi", "Yudhatama")).toBe("Rifaldi Yudhatama");
  });
});
