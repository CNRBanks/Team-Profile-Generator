
const Intern = require("../lib/Intern");
const trabajador2 = new Intern("test2", "dingus2@yahoo.com", "56", "dale");

test("github is stored correctly", () => {
  expect(trabajador2.escuela).toBe("test2");
});
test("email is stored correctly", () => {
  expect(trabajador2.correo).toBe("dingus2@yahoo.com");
});
test("ID is stored correctly", () => {
  expect(trabajador2.id).toBe("56");
});
test("name is stored correcty", () => {
  expect(trabajador2.nombre).toBe("dale");
});
