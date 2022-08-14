import persons from '../app';

/* test('check status health person', () => {
  const person = persons();
  expect(person).toBe('healthy');
}); */

const person = { name: 'Маг', health: 12 };

const datalist = [
  [person.health = 12, 'critical'],
  [person.health = 25, 'wounded'],
  [person.health = 90, 'healthy'],
  [person.health = 0, 'god mode or person death'],
];

const handler = test.each(datalist);
handler('test health status person, value: %i, status: %s', (val, statusHealth) => {
  const healthValue = persons(val);
  expect(healthValue).toBe(statusHealth);
});
