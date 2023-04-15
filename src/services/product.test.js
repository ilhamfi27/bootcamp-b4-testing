const productSvc = require('./product');
const Product = require('../models/product');
const productFixtures = require('../../test/fixtures/products.js');

describe('.fetch()', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('fetch products', async () => {
    jest.spyOn(Product, 'find').mockReturnValue(productFixtures);
    const res = await productSvc.fetch();
    expect(res.length > 0).toBeTruthy();
  });
  test('fetch empty products', async () => {
    jest.spyOn(Product, 'find').mockReturnValue([]);
    const res = await productSvc.fetch();
    expect(res.length > 0).toBeFalsy();
    expect(res.message).toBe('data is empty');
  });
});
