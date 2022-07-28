const Manager = require("../lib/manager");

// creating Manager object test
test("creating a Manager", () => {
    const manager = new Manager("Michael Scott", 10, "michael.scott@dundermifflin.paper", 1);

    expect(manager.officeNum).toEqual(expect.any(Number));
});

test("returns Manager if employee is a Manager", () => {
    const manager = new Manager("Michael Scott", 10, "michael.scott@dundermifflin.paper", 1);

    expect(manager.getRole()).toEqual("Manager")
});