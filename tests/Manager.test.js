// TODO: Import Manager class
// test email is stored correctly
// test id is stored correctly
// test name is stored correctly
// test role is stored correctly
// test office number is stored correctly
const Manager = require("../lib/Manager");
const trabajador3 = new Manager("test3", "dingus3@yahoo.com", "78", "eric");

test("github is stored correctly", () => {
  expect(trabajador3.oficina).toBe("test3");
});
test("email is stored correctly", () => {
  expect(trabajador3.correo).toBe("dingus3@yahoo.com");
});
test("ID is stored correctly", () => {
  expect(trabajador3.id).toBe("78");
});
test("name is stored correcty", () => {
  expect(trabajador3.nombre).toBe("eric");
});
