

const Engineer = require("../lib/Engineer");
const trabajador1 = new Engineer("test", "dingus1@yahoo.com", "26", "steve");

test("github is stored correctly", () => {
  expect(trabajador1.github).toBe("test");
});
test("email is stored correctly", () => {
  expect(trabajador1.correo).toBe("dingus1@yahoo.com");
});
test("ID is stored correctly", () => {
  expect(trabajador1.id).toBe("26");
});
test("name is stored correcty", () => {
  expect(trabajador1.nombre).toBe("steve");
});
