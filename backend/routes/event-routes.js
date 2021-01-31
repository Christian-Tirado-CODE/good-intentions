const express = require("express");

const { check } = require("express-validator"); // https://express-validator.github.io/docs/

const router = express.Router();

const eventsController = require("../controllers/eventsController");

router.get("/", eventsController.getEvents);

router.get("/:id", eventsController.getEventById);

router.post("/add-event",
  [check("title").not().isEmpty(),
   check('description').isLength({min: 5}),
],
  eventsController.createEvent
);

router.delete("/:id", eventsController.deleteEvent);

module.exports = router;
