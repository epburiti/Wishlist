const yup = require('yup');
const axios = require('axios');
const db = require('../database/database');

class FavoritesController {
  async get(req, res) {
    const values = await db.firestore().collection(`favorites`).get();

    if (values.empty) {
      return res.status(200).json([]);
    }
    const {
      data: { products },
    } = await axios.get(
      'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e',
    );
    // return res.json(data);

    const data = [];

    values.forEach((doc) => {
      const docRef = doc.data();
      const dataOnProduct = products.find((item) => item.id == docRef.id);
      dataOnProduct.favoritesId = docRef.favoritesId;
      data.push(dataOnProduct);
    });

    return res.json(data);
  }

  async post(req, res) {
    try {
      const schema = yup.object().shape({
        id: yup.number().required('id é obrigatorio e é do tipo number'),
      });

      await schema.validate(req.body, { abortEarly: false });

      const values = await db
        .firestore()
        .collection('favorites')
        .where('id', '==', req.body.id)
        .get();
      if (values.empty) {
        const response = await db.firestore().collection(`favorites`).add({
          id: req.body.id,
        });

        const response2 = await db
          .firestore()
          .collection(`favorites`)
          .doc(response.id)
          .set({ id: req.body.id, favoritesId: response.id });

        return res.status(200).json({ response2 });
      }
      return res.status(400).json({ messages: 'Esse favorito já está salvo' });
    } catch (err) {
      return res.status(400).json({ messages: err.inner });
    }
  }

  async delete(req, res) {
    console.log('chamou', req.body);
    try {
      const schema = yup.object().shape({
        favoritesId: yup.string().required('favoritesId é obrigatorio'),
      });
      await schema.validate(req.body, { abortEarly: false });

      await db
        .firestore()
        .collection(`favorites`)
        .doc(req.body.favoritesId)
        .delete();
      return res.status(200).json({ response: 'ok' });
    } catch (error) {
      return res.status(400).json({ messages: error });
    }
  }
}

module.exports = new FavoritesController();
