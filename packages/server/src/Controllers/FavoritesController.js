const db = require("../database/database");
const yup = require("yup");
const { response } = require("express");

class FavoritesController {
  async get(req, res) {
    const values = await db.firestore().collection(`favorites`).get();

    if (values.empty) {
      return res.status(403).json();
    }

    let data = new Array();

    values.forEach((doc) => data.push(doc.data()));

    return res.json(data);
  }
  async post(req, res) {
    try {
      const schema = yup.object().shape({
        id: yup.number().required("id é obrigatorio e é do tipo number"),
      });

      await schema.validate(req.body, { abortEarly: false });

      let response = await db
        .firestore()
        .collection(`${datastoreNode}/company`)
        .add({
          id: req.body.id
        });

      let response2 = await db
        .firestore()
        .collection(`${datastoreNode}/company`)
        .doc(response.id)
        .set({ ...req.body.id, id: response.id });

      return res.status(200).json({ response2 });
    } catch (err) {
      return res.status(400).json({ messages: err.inner });
    }

  }
}

module.exports = new FavoritesController();
