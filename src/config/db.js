const { connect } = require("mongoose");

const uri =
  "mongodb+srv://joaquinvillalba8:rAQYog9fhBZ3O8Jd@cluster-mern.bteo91z.mongodb.net/?retryWrites=true&w=majority";

const conectDB = () => {
  connect(uri)
    .then(() => {
      console.log("Conectado a MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};
conectDB()
