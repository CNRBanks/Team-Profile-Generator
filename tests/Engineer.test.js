// TODO: Import Engineer class
// test email is stored correctly
// test id is stored correctly
// test name is stored correctly
// test role is stored correctly
// test GitHub account is stored correctly

const Employee = require("../lib/Employee");
const trabajador = new Employee("dingus@yahoo.com", "12", "bob");

test("email is stored correctly", () => {
  expect(trabajador.correo).toBe("dingus@yahoo.com");
});
