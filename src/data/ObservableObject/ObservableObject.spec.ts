import ObservableObject from './ObservableObject';


it('should have a string uid', () => {
  const obj = new ObservableObject({ test: 'test' });
  expect(typeof obj.uid).toBe('string');
});

it('test should get B not A', () => {
  const obj = new ObservableObject({ test: 'A' });
  obj.set('test', 'B');
  expect(obj.get('test')).toBe('B');
});
