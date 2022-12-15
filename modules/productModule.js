const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.getProduct = async (req,res,next) => {
   try{
       const productData = await mongo.selectedDb.collection("product").find().toArray();
       res.send(productData)
   } catch(err) {
    console.error(err);
    res.status(500).send(err)
   }
}

module.exports.createProduct = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("product").insertOne(req.body.product);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}

module.exports.updateProduct = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("product")
                        .findOneAndUpdate({_id:ObjectId(req.params.productId)}, 
                                          {$set: {...req.body.product}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}

module.exports.deleteProduct = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("product").remove({_id: ObjectId(req.params.productId)});
        res.send(deletedData)
    }catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}