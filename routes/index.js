module.exports = (app, dbs) => {
  app.get('/users', (req, res) => {
    dbs.dev
      .collection('users')
      .find({})
      .toArray((err, docs) => {
        if (err) {
          console.log(err);
          res.error(err);
        } else {
          res.json(docs);
        }
      });
  });

  app.get('/bloodTypes', (req, res) => {
    dbs.dev
      .collection('bloodTypes')
      .find({})
      .toArray((err, docs) => {
        if (err) {
          console.log(err);
          res.error(err);
        } else {
          res.json(docs);
        }
      });
  });

  app.get('/westernZodiacs', (req, res) => {
    dbs.dev
      .collection('westernZodiacSigns')
      .find({})
      .toArray((err, docs) => {
        if (err) {
          console.log(err);
          res.error(err);
        } else {
          res.json(docs);
        }
      });
  });

  app.get('/easternZodiacs', (req, res) => {
    dbs.dev
      .collection('easternZodiacSigns')
      .find({})
      .toArray((err, docs) => {
        if (err) {
          console.log(err);
          res.error(err);
        } else {
          res.json(docs);
        }
      });
  });

  return app;
};
