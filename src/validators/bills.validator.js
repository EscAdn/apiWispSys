import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper.js";

const validateCreated = [
  check("concept").exists().isString(),
  check("payment_type_id").exists().isNumeric().optional(),
  check("client_name").isString().optional(),
  check("amount_income").exists().isDecimal(),
  check("amount_discharge").exists().isDecimal(),
  check("invoice").isNumeric().optional(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
