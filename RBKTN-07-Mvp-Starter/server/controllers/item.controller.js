
const { data } = require('jquery');
const Item = require('../database-mongo/Item.model.js');




// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
const selectAll = async function (req, res) {
  try {
    const items = await Item.find({});
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};
const selectOne = async function (req, res) {
    try {
        var name=req.body.name
      const items = await Item.findOne({ name: name });
      res.status(200).send(items);
    } catch (error) {
      res.status(500).send(error);
    }
  };

const addOne = async(req,res)=>{
    try{
        let data=req.body
        const one= await Item.create(data);
        res.status(201).send(one)
    }catch (err){
        res.status(500).send(err)
    }
}
const deleted = async(req,res)=>{
try{
  let e= req.params.id
const deleted= await Item.deleteOne({_id:e})
 res.json(deleted)
}catch(err){
    res.status(500).send(err)
}
}
const updated = async(req,res)=>{
    try{
    let e=req.params.id
    dat=req.body
    upd= await Item.findOneAndUpdate({_id:e},dat)
    res.send(upd)
    }catch(err){
        res.status(500).send(err)
    }
    }

module.exports = { selectAll, selectOne, addOne, deleted,updated  };




// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };