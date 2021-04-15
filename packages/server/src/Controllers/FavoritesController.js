const db = require("../database/database");
const yup = require("yup");

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

      const values = await db.firestore()
        .collection('favorites').where('id', '==', req.body.id).get();
      if (values.empty) {
        let response = await db
          .firestore()
          .collection(`favorites`)
          .add({
            id: req.body.id
          });

        let response2 = await db
          .firestore()
          .collection(`favorites`)
          .doc(response.id)
          .set({ id: req.body.id, favoritesId: response.id });

        return res.status(200).json({ response2 });
      } else {
        return res.status(400).json({ messages: "Esse favorito já está salvo" });
      }

    } catch (err) {
      return res.status(400).json({ messages: err.inner });
    }

  }
  async delete(req, res) {
    try {
      const schema = yup.object().shape({
        favoritesId: yup.string().required("favoritesId é obrigatorio"),
      });
      await schema.validate(req.body, { abortEarly: false });

      await db
        .firestore()
        .collection(`favorites`)
        .doc(req.body.favoritesId)
        .delete();
      return res.status(200);
    } catch (error) {
      return res.status(400).json({ messages: error });
    }
  }

}

module.exports = new FavoritesController();
