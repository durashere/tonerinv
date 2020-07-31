/* eslint-disable no-underscore-dangle */
const tonersRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Toner = require("../models/toner");
const User = require("../models/user");
const getTokenFrom = require("../utils/middleware");

tonersRouter.get("/", async (request, response) => {
  const toners = await Toner.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  response.json(toners.map((toner) => toner.toJSON()));
});

tonersRouter.post("/", async (request, response, next) => {
  const { body } = request;

  try {
    if (request.body.title === undefined && request.body.url === undefined) {
      response.status(400).end();
    }

    if (!request.token || !request.token.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }
    const user = await User.findById(request.token.id);

    const tonerObject = new Toner({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id,
    });

    const savedToner = await tonerObject.save();
    user.toners = user.toners.concat(savedToner._id);
    await user.save();
    await savedToner
      .populate({ path: "user", select: ["name", "username"] })
      .execPopulate();
    response.status(201).json(savedToner.toJSON());
  } catch (exception) {
    next(exception);
  }
});

module.exports = tonersRouter;
