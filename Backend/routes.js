let opc = {
  useUnifiedTopology: true
};
const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://admin:4dm1ndb@localart-0uov4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, opc, { useNewUrlParser: true });
client.connect(err => {
  client.close();
});
module.exports = app => {
  app.get("/login", (req, res) => {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      var dbo = db.db("localartdb");
      dbo
        .collection("users")
        .find({})
        .toArray(function(err, result) {
          if (err) throw err;
          res.status(200).send(result);
          db.close();
        });
    });
    // res.status(200).send("GET OK");
  });

  app.post("/login", (req, res) => {
    user=req.body.user;
    pass=req.body.pass;
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      var dbo = db.db("localartdb");
      dbo
        .collection("users")
        .find({ $and:[{userLogin:user},{userPassword:pass}]})
        .toArray(function(err, result) {
          if (err) throw err;
          res.status(200).send(result);
          db.close();
        });
    });
    // res.status(200).send("GET OK");
  });
  
};
