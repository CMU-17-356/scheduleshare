const {MongoClient, ServerApiVersion} = require('mongodb');
require('dotenv').config({path: './secret.env'});

function startDatabase() {
  const uri = `mongodb+srv://${process.env.MONGO_CREDENTIALS}@cluster0.bz5co.mongodb.net/ScheduleShare?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  return client;
}

exports.startDatabase = startDatabase;
