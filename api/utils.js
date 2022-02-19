// TODO catch error function

const validator = (requiredFields) => (req, res, next) => {
  for (let i = 0; i < requiredFields.length; i++) {
    const requiredField = requiredFields[i];
    if (!req.body[requiredField] || !req.body[requiredField].trim()) {
      res.locals.errorMessage = `Invalid request, ${requiredField} is required.`;
      res.status(400);
      res.json(res.locals);
      return;
    }
  }
  if (Object.keys(req.body).length > requiredFields.length) {
    res.locals.errorMessage = `Invalid request, only ${requiredFields.join()} is/are required.`;
  }
  next();
};

const blockIdData = (req, res, next) => {
  if (req.body.id || req.body.userId || req.body.user_id) {
    res.locals.errorMessage = "Do not change (user) id data.";
    return res.status(400).json(res.locals);
  }
  next();
};

module.exports = { validator, blockIdData };
