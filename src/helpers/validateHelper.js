import { validationResult } from "express-validator";

const validateResults = (req, resp, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    resp.status(403);
    resp.send({ err: err.array() });
  }
};

export default validateResults;
