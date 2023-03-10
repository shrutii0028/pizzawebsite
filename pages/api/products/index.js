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

  dbConnect()
    if (method === "GET") {
      try {
        const products = await Product.find();
        console.log('products; ' + products)
        res.status(200).json(products);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    }
  
    if (method === "POST") {
  
      try {
        console.log(req.body)
        // let new_product = new Product(req.body)
        // new_product.save(function(err){
        //   if(err) console.log(err); 
        // });
        const new_product = await Product.create(req.body);
        res.status(201).json(new_product);
      } catch (err) {
        console.error(err)
        res.status(500).json(err);
      }
    }

}