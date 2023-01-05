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
  const { method, 
    query: {id}
} = req;

//   const token = cookies.token

  dbConnect()
    if (method === "GET") {
      try {
        const products = await Product.findById(id);
        console.log('products; ' + products)
        res.status(200).json(products);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    }
  
    if (method === "PUT") {
  
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

    if (method === "DELETE") {
  
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