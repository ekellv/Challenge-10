const Intern = require("../lib/intern");

test("creates an Intern", () => {
    const intern = new Intern("Michael Scott", 10, "michael.scott@dundlermifflin.paper", "Univerity of Scranton");

    expect(intern.school).toEqual(expect.any(String));
});

test("returns the employee's school if they are an intern", () => {
    const intern = new Intern("Michael Scott", 10, "michael.scott@dundlermifflin.paper", "Univerity of Scranton");

    expect(intern.getSchool()).toEqual(intern.school);
});

test("return's employee's role as Intern if they're an intern", () => {
    const intern = new Intern("Michael Scott", 10, "michael.scott@dundlermifflin.paper", "Univerity of Scranton");

    expect(intern.getRole()).toEqual("Intern");
});