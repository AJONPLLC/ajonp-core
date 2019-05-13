import DataSource from '../DataSource/DataSource';

const testData = [{ name: 'Jane Doe', age: 30 }, { name: 'John Doe', age: 33 }];

it('should return a DataSource', () => {
  expect(new DataSource({ data: testData })).toBeInstanceOf(DataSource);
});

it('should get a Map object', () => {
  const ds = new DataSource({ data: testData });
  expect(ds.getData()).toBeInstanceOf(Map);
});

it('should get an instance of an ObservableObject with matching uid', () => {
  const ds = new DataSource({ data: testData });
  const uid = ds
    .getData()
    .keys()
    .next().value; //get first uid in map
  expect(ds.getObservableObjectByUid(uid).uid).toBe(uid);
});
