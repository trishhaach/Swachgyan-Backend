// const { MongoClient } = require("mongodb");

// const uri = "mongodb+srv://trishachaudhary:FIRSTDECEMBER2002@cluster0.ufh0evp.mongodb.net/";

// const connectToMongoDB = async () => {
//   try {
//     await mongoose.connect(uri);
//     console.error("Connected to MongoDB");
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//     throw err;
//   }
// };

// module.exports = connectToMongoDB;


const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://trishachaudhary:FIRSTDECEMBER2002@cluster0.ufh0evp.mongodb.net/?retryWrites=true&w=majority";
let db;

const connectToMongoDB = async () => {
  try {
    const client = new MongoClient(uri);

    await client.connect();
    db = client.db("techwebsite"); 
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
    throw err;
  }
};

const getDb = () => {
  if (!db) {
    throw new Error("Database not connected");
  }
  return db;
};

module.exports = { connectToMongoDB, getDb };
