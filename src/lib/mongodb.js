import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = "mongodb+srv://nasr528:vHA2wETR41pZKu97@cluster0.ixahtdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
            return mongooseInstance;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectToDatabase;
