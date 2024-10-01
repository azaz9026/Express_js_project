

const express = require("express")

const {home} = require("../contorllers/use_contorller.js")


const router = express.Router();

router.get("/", home)

module.exports = router


