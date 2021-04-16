const request = require('supertest');
const app = require('../../src/app');

describe('Products tests', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/products');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('products');
  });
});
