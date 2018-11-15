const db= require('../models')

module.exports = function (app) {

    app.get('/api/users', function (req, res) {
        db.BlogPost.find({})
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
      });
      app.get('/api/kudos', function (req, res) {
        db.users.find({})
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
      });

      app.post('/api/kudos', function (req, res) {
        db.BlogPost.create(req.body)
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
      });
    
     
}