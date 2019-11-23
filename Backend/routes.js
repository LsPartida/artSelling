let opc = {
  useUnifiedTopology: true
};
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://admin:4dm1ndb@firsttry-vsa75.mongodb.net/test?retryWrites=true&w=majority;`;
const client = new MongoClient(url, opc, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
module.exports = app => {
  app.get("/", (req, res) => {
    // MongoClient.connect(url, function(err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("bedu");
    //   dbo
    //     .collection("users")
    //     .find({})
    //     .toArray(function(err, result) {
    //       if (err) throw err;
    //       res.status(200).send(result);
    //       db.close();
    //     });
    // });
    res.status(200).send("GET OK");
  });
};
