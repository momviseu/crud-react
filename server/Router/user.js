const express = require("express");
const routes = express.Router();
const userModel = require("../Model/userModel");

routes.get("/", async (req, res) => {
  try {
    const getuser = await userModel.find();
    res.json(getuser);
  } catch (err) {
    console.log(err);
  }
});

routes.get("/:id", async (req, res) => {
  try {
    const userId = await userModel.findById(req.params.id);
    res.json(userId);
  } catch (err) {
    console.log(err);
  }
});

routes.post("/", async (req, res) => {
  const data = {
    name: req.body.name,
    url: req.body.url,
    gender: req.body.gender,
    age: req.body.age,
    address: req.body.address,
  };
  try {
    const user = new userModel(data);
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

routes.patch('/:id', async (req, res) => {
    const data = {
        name: req.body.name,
        url: req.body.url,
        gender: req.body.gender,
        age: req.body.age,
        address: req.body.address,
      };
      try{
        await userModel.findByIdAndUpdate({_id: req.params.id},data);
        const userUpdate = await userModel.findById(req.params.id);
        res.json(userUpdate);

      }catch(err){
        console.log(err);
      }
})


routes.delete('/:id', async (req, res) => {
    await userModel.findByIdAndRemove(req.params.id);
    res.json({
        message: "Deleted",
    });
})

// // @GET
// routes.get('/', (req, res) => {
//     // res.json({
//     //     data: [
//     //         {
//     //             id : 1,
//     //             name: "John",
//     //             gender: "Male",
//     //         },
//     //         {
//     //             id : 2,
//     //             name: "Sok",
//     //             gender: "Male",
//     //         }
//     //     ]
//     // })
// })

// // @POST
// routes.post('/', (req, res) => {
//     res.json(req.body);
// })

// // @PATCH
// routes.patch('/:id', (req, res) => {
//     res.send("This is id postman " +req.params.id);
// })

// // @DELETE
// routes.delete('/:id', (req, res) => {
//     res.send("Delete is id =  " +req.params.id);
// })

module.exports = routes;
