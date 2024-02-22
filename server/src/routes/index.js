const express = require('express');
const Router = require("express");

const userRouter = require('./userRouter');
const loginRouter = require("./loginRouter");
const logoutRouter = require("./logoutRouter");
const mContentRouter = require("./mContentRouter");

const router = Router();



router.use('/users', userRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);
router.use("/multimedia", mContentRouter);


module.exports = router;

