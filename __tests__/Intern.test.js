const Intern = require('../lib/Intern');

test('creates an intern object', ()=> {
  const intern = new Intern('Dave', 1, 'dave@email.com', 'university');

  expect(intern.name).toBe('Dave');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toMatch('@');
  expect(intern.school).toBe('university');
});

test('gets intern role', () => {
  const intern = new Intern('Dave', 1, 'dave@email.com', 'university');

  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})

test('gets intern school', () => {
  const intern = new Intern('Dave', 1, 'dave@email.com', 'university');

  expect(intern.getSchool()).toEqual(expect.stringContaining('university'));
})