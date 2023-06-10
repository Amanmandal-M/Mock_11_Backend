const express = require("express");
const travelRouter = express.Router();

// Controllers Location
const {
  allTravelData,
  singleTravelData,
  filteredTravelData,
  sortedTravelData,
  addTravelData,
  editTravelData,
  deleteTravelData,
} = require("../controllers/travelController");

// This endpoint should allow users to view all the travel data.
travelRouter.get("/travel", allTravelData);

// This endpoint should allow users to view single travel data by their Id.
travelRouter.get("/travel/:id", singleTravelData);

// This endpoint should allow users to filter using destination.
travelRouter.get("/travel?filter", filteredTravelData);

// This endpoint should return the details of sorted data according price of budget.
travelRouter.get("/travel?sort", sortedTravelData);

// This endpoint should allow users to add travel data.
travelRouter.post("/travel", addTravelData);

// This endpoint should allow users to edit the data.
travelRouter.patch("/travel/:id", editTravelData);

// This endpoint should allow travel to delete a specific travel data
travelRouter.delete("/travel/:id", deleteTravelData);

module.exports = { travelRouter };
