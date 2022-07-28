// requiring the Engineer constructor 
const Engineer = require("../lib/engineer");

// testing Engineer 
test("creates an engineer", () => {
    const engineer = new Engineer("Michael Scott", 10, "michael.scott@dundlermifflin.paper", "michaelscottGH");

    expect(engineer.github).toEqual(expect.any(String));
});

test("returns employee's github username", () => {
    const engineer = new Engineer("Michael Scott", 10, "michael.scott@dundlermifflin.paper", "michaelscottGH");

    expect(engineer.getGithub()).toBe(engineer.github);
});

test("returns an employee's role if they are an engineer", () => {
    const engineer = new Engineer("Michael Scott", 10, "michael.scott@dundlermifflin.paper", "michaelscottGH");

    expect(engineer.getRole()).toBe("Engineer");
});