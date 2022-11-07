const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.getuser = async (req,res,next) => {
   try{
       const userData = await mongo.selectedDb.collection("users").find().toArray();
       res.send(userData)
   } catch(err) {
    console.error(err);
    res.status(500).send(err)
   }
}

module.exports.getPosts = async (req,res,next) => {
    try{
        const postData = await mongo.selectedDb.collection("posts").find().toArray();
        res.send(postData)
    } catch(err) {
     console.error(err);
     res.status(500).send(err)
    }
 }

module.exports.createuser = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("users").insertOne(req.body.user);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}

module.exports.updateuser = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("users")
                        .findOneAndUpdate({_id:ObjectId(req.params.userId)}, 
                                          {$set: {...req.body.user}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}

module.exports.deleteuser = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("users").remove({_id: ObjectId(req.params.userId)});
        res.send(deletedData)
    }catch(err) {
        console.error(err);
        res.status(500).send(err)
    }
}
