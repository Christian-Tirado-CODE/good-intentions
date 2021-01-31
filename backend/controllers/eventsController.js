const HttpError = require("../models/http-error");
const uuid = require("uuid").v4;
const { validationResult } = require("express-validator");

const Event = require("../models/event");

let DUMMY_EVENTS = [
  {
    id: "1",
    title: "First event",
  },
  {
    id: "2",
    title: "Second event",
  },
];

const getEvents = async (req, res, next) => {
  let events;
  try {
    events = await Event.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching events failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ events: events.map(evt => evt.toObject({ getters: true })) });
};

const getEventById = async (req, res, next) => {
  const eventId = req.params.id;
  let event;

  try {
    event = await Event.findById(eventId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a place.",
      500
    );
    return next(error);
  }

  if (!event) {
    const error = new HttpError(
      "Coul not find the event for the provided id",
      404
    );
    return next(error);
  }

  res.json({ event: event.toObject({ getters: true }) }); // = {event: event}
};

const createEvent = async (req, res, next) => {
  const errors = validationResult(req);

  console.log(errors);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { title, description } = req.body;

  const createdEvent = new Event({
    title,
    description,
  });

  try {
    await createdEvent.save();
  } catch (err) {
    const error = new HttpError(
      "Creating place failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ event: createdEvent });
};

const deleteEvent = (req, res, next) => {
  const eventId = req.params.id;
  if (!DUMMY_EVENTS.find((evt) => evt.id === eventId)) {
    throw new HttpError("could not find a place for that id.", 404);
  }

  DUMMY_EVENTS = [DUMMY_EVENTS.find((evt) => evt.id !== eventId)];
  res.status(200).json({ message: "Event deleted" });
};

exports.getEvents = getEvents;
exports.getEventById = getEventById;
exports.createEvent = createEvent;
exports.deleteEvent = deleteEvent;
