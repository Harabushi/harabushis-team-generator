const Employee = require('../lib/Employee')


test('creates an employee object', ()=> {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toMatch('@');
});

test('gets employee name', () => {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.getName()).toEqual(expect.stringContaining('Dave'));
})

test('gets employee id', () => {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.getID()).toEqual(expect.any(Number));
})

test('gets employee email', () => {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.getEmail()).toEqual(expect.toMatch('@'));
})

test('gets employee role', () => {
  const employee = new Employee('Dave', 1, 'dave@email.com');

  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})