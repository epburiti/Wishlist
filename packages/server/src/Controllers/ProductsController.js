const axios = require('axios');

class ProductsController {
  async get(request, response) {
    try {
      const { data } = await axios.get('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }

}

module.exports = new ProductsController();
