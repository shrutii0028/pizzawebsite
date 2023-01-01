import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

// const {MongoClient} = require ('mongodb')
// const url = 'mongodb://localhost:4000'
// const client = new MongoClient(url)



// function getData()
// {
//     let result = 
// }

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {

    
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }}