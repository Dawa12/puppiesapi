const db = require('../lib/dbConnect');

function getAllPuppies(req, res, next) {

  db.any('SELECT * from puppies;')
    .then((puppies) => {
      res.puppies = puppies;
      next();
    })
    .catch(error => next(error));
}

function adoptPuppy(req, res, next) {
  // Implement adopting a puppy
  db.none("INSERT INTO puppies(name, url) values($1, $2)", [req.body.name, req.body.url])
      .then((data) => {
          res.puppies = data;
          next();
      })
      .catch(function (error) {
          next(error);
      });
}

function abandonPuppy(req, res, next) {
  // Implement abandoning the puppy :(
  db.none(`
    DELETE
    FROM puppies
    WHERE id = $1;`, parseInt(req.params.id)
  )
}

function likePuppy(req, res, next) {
  // Implement increasing the likes value of the puppy by one
  db.none(`
    UPDATE puppies
    SET likes = likes + 1
    WHERE id = $1;`, parseInt(req.params.id)
  )
}

module.exports = {
  getAllPuppies,
  adoptPuppy,
  abandonPuppy,
  likePuppy
};
