import { MongoClient, ServerApiVersion } from 'mongodb';

// Use the provided MongoDB Atlas connection string
const uri = "mongodb+srv://dianaluvanda:WhLgW1glrv92D2Qq@diana-luvanda-potfolio.g9incln.mongodb.net/?retryWrites=true&w=majority&appName=Diana-Luvanda-Potfolio";

// MongoDB client options with Stable API version
const clientOptions = { 
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, clientOptions);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, clientOptions);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
