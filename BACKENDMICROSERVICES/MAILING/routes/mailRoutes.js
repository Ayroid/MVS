import express from "express";
import {
  CREATE_MAIL,
  READ_MAIL,
  READ_MAIL_ID,
} from "../controllers/mailController.js";

const mailRouter = express.Router();

mailRouter.route("/").get(READ_MAIL).post(CREATE_MAIL);

mailRouter.route("/:id").get(READ_MAIL_ID);

export { mailRouter as MAIL_ROUTER };
