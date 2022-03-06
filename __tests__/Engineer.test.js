const Engineer = require('../lib/Engineer');

test('creates an engineer object', ()=> {
  const engineer = new Engineer('Dave', 1, 'dave@email.com', 'https://github.com/Dave');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toMatch('@');
  expect(engineer.github).toMatch('github');
});

test('gets engineer role', () => {
  const engineer = new Engineer('Dave', 1, 'dave@email.com', 'https://github.com/Dave');

  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})

test('gets engineer github', () => {
  const engineer = new Engineer('Dave', 1, 'dave@email.com', 'https://github.com/Dave');

  expect(engineer.getGithub()).toEqual(expect.stringContaining('github'));
})