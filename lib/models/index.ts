import mongoose from 'mongoose';

// Use the provided MongoDB Atlas connection string
const MONGODB_URI = "mongodb+srv://dianaluvanda:WhLgW1glrv92D2Qq@diana-luvanda-potfolio.g9incln.mongodb.net/?retryWrites=true&w=majority&appName=Diana-Luvanda-Potfolio";

// Define cached connection interface
interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Define the mongoose global type
declare global {
  var mongoose: CachedConnection | undefined;
}

// MongoDB client options
const clientOptions = { 
  bufferCommands: false
};

let cached: CachedConnection = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, clientOptions);
  }
  
  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export default dbConnect;
