const db= require('../models')

module.exports = function (app) {

  ///to get all users 
    app.get('/api/user', function (req, res) {
        db.user.find({})
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
      });
     
/// post route to post a kudos
      app.post('/api/kudos', function (req, res) {
        db.kudos.create(req.body)
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
      });

     ///get route for kudos
  app.get('/api/kudos', function (req, res) {
    db.kudos.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
    
     
}