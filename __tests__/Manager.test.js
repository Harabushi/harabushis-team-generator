const Manager = require('../lib/Manager');

test('creates an manager object', ()=> {
  const manager = new Manager('Dave', 1, 'dave@email.com', 1);

  expect(manager.name).toBe('Dave');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toMatch('@');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager role', () => {
  const manager = new Manager('Dave', 1, 'dave@email.com', 1);

  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})