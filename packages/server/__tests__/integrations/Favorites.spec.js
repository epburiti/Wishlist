const request = require('supertest');
const app = require('../../src/app');

describe('Favorites tests', () => {
  let idRef;
  it('should return status 200', async () => {
    const response = await request(app).get('/favorites');

    expect(response.status).toBe(200);
  });
  it('POST - should return status 201', async () => {
    const favorite = { id: 636 };
    const response = await request(app).post('/favorites').send(favorite);
    idRef = response.body;
    expect(response.status).toBe(201);
  });
  it('DELETE - should return status 200', async () => {
    const response = await request(app).delete(
      `/favorites/${idRef.favoritesId}`,
    );

    expect(response.status).toBe(200);
  });
});
