import mongoose from 'mongoose'

// const MONGO_URL = process.env.MONGO_URL
const MONGO_URL = 'mongodb+srv://Wisekhan10:Wisekhan1998@cluster0.m8izi.mongodb.net/?retryWrites=true&w=majority'


if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

mongoose.connect(MONGO_URL,{
      bufferCommands: false,
      useNewUrlParser:true,
      useUnifiedTopology:true
    } )


async function dbConnect() {
  const db = mongoose.connection
  db.once("open", () => {console.log("DB started successfully")})
  // console.log("DB started successfully")
  // if (cached.conn) {
  //   return cached.conn
  // }

  // if (!cached.promise) {
  //   const opts = {
  //     bufferCommands: false,
  //     useNewUrlParser:true,
  //     useUnifiedTopology:true
  //   }

  //   cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
  //     console.log('12344r3')
  //     return mongoose
  //   })
  // }

  // try {
  //   cached.conn = await cached.promise
  // } catch (e) {
  //   cached.promise = null
  //   throw e
  // }

  // return db

}

export default dbConnect