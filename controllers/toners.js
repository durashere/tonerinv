/* eslint-disable no-underscore-dangle */
const tonersRouter = require("express").Router();
const Toner = require("../models/toner");

tonersRouter.get("/", async (request, response) => {
  const toners = await Toner.find({});
  response.json(toners.map((toner) => toner.toJSON()));
});

module.exports = tonersRouter;
