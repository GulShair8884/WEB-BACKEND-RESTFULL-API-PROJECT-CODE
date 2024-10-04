// import express qurey or liberary for router
const express = require('express');
const Model = require('../models/models');
const router = express.Router();

// GET ALL API
router.get('/getAll', async (req, res)=>
{
    try
    {

        const data =  await Model.find();
        res.json(data);
    }
    catch(error)
    {
        res.status(500).json({Pmessage: error.message});
    }
});

// GET BY ID API
router.get('/getOne/:id',(req, res) =>
{
    res.send(req.params.id);
});

// POST API
router.post('/post', async (req, res)=>
{
const myData = new Model              
({
        Message:req.body.Message,
        name: req.body.name,
        age: req.body.age
    });
    try 
    {
        const myDataToSave = await myData.save();
        res.status(200).json(myDataToSave);
    }
    catch(error)
    {
        res.status(400).json({message: error.message});
    }
});
// Update by ID Method
// PATACH/UPDATE API
router.patch('/update/:id',async (req, res) =>
{
try
{
    const id = req.params.id;
    const updatedData = req.body;
    const options = req.body;

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
}
catch(error)
{
  res.status(400).json({message: error.message});
}
});

// DELETE API
router.delete('/delete/:id', async (req, res)=>
{
    try
    {
        const myId = req.params.id;
        const myData =await Model.findByIdAndDelete(myId);
        res.send('Document has been deleted..');
    }
    catch
    {
        res.status(400).json({message: error.message});
    }
});

// Modules help to orgnize code into smaller, 
// manageable pieces, promote code reusability, and
// facilitate better maintainability and scalability
// of Node JS applications.
// We will get an error because we don't have anything 
// inside the routes file. So, let's add them.
// Here, we are using Router from Express, 
// and we are exporting it too using module.exports. 
// And now, our app will work fine.
// Using Module for router.
module.exports = router;

