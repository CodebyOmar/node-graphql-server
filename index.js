const app = require('express')()
      ,mongoose = require('mongoose')
      ,bodyParser = require('body-parser')
      ,{ graphqlExpress, graphiqlExpress } = require('apollo-server-express')
      ,schema = require('./graphql/schema') // GraphQL Support
      ,config  = require('./config')
      ,mongoContext = { User: require('./models/User'), Post: require('./models/Post'), Comment: require('./models/Comment') };


app.set('port', config.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const dbUrl = config.mongoDB;
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl,  {
  keepAlive: true,
  reconnectTries: 30,
  useMongoClient: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => { console.log(`Connected to db at ${dbUrl}`); });

// Define routes
app.use( '/graphiql',  graphiqlExpress({ endpointURL: '/graphql' }) );      
app.use( '/graphql', bodyParser.json(), graphqlExpress({ schema , context:Object.assign({}, mongoContext) }) );
app.get('/', (req, res) => {
    res.status(200).send('Hello World !');
});

// Start the server
app.listen(app.get('port'),() => {
    console.log(`App Listening on port ${app.get('port')}`);
});