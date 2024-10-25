
const request = require('supertest')
const app = require('../index.js')

describe("GET /getPokemones", () => {
    test('should return status code 200', async () => {
        const response = await request(app).get('/getPokemones').send();

        console.log(response)
    })
})