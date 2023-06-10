// Models location
const { travelModel } = require("../models/travelModel");

// This endpoint should allow users to view all the travel data.
const allTravelData = async (req,res) => {
    try {
        const data = await travelModel.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
};

// This endpoint should allow users to view single travel data by their Id.
const singleTravelData = async (req,res) => {
    const Id = req.params.id
    try {
        const data = await travelModel.findById(Id);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
};

// This endpoint should allow users to filter using destination.
const filteredTravelData = async (req,res) => {
    const filterBody = req.query.filter
    try {
        const data = await travelModel.find({destination:filterBody});
        return res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
};

// This endpoint should return the details of sorted data according price of budget.
const sortedTravelData = async (req,res) => {
    const status = req.query.sort;
    try {
        if(status === "asc"){
            const data = await travelModel.find().sort({
                budget_per_person:1
            });
            return res.status(200).json(data);
        }else{
            if(status === "desc"){
                const data = await travelModel.find().sort({
                    budget_per_person:-1
                });
                return res.status(200).json(data);
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
};

// This endpoint should allow users to add travel data.
const addTravelData = async (req,res) => {
    const payload = req.body;
    try {
        const data = new travelModel(payload);
        await data.save();
        return res.status(201).json('Data added successfully')
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
};

// This endpoint should allow users to edit the travel data.
const editTravelData = async (req,res) => {
    const Id = req.params.id
    const payload = req.body;
    try {
        const data = await travelModel.findByIdandUpdate({_id:Id}, payload);
        return res.status(204).json("Data Updated Successfully");
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
};


// This endpoint should allow travel to delete a specific travel data
const deleteTravelData = async (req,res) => {
    const Id = req.params.id
    try {
        const data = await travelModel.findByIdandDelete({_id:Id});
        return res.status(202).json("Data Deleted Successfully");
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
};




module.exports = {
  allTravelData,
  singleTravelData,
  filteredTravelData,
  sortedTravelData,
  addTravelData,
  editTravelData,
  deleteTravelData,
};
