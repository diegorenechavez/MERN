module.exports = {
  mongoURI:
    "mongodb+srv://Dev:Movies01!@cluster0.alwpz.mongodb.net/<dbname>?retryWrites=true&w=majority",
    secretOrKey: "thelittlekitty09"
  //Make sure this is your own unique string
};
if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
