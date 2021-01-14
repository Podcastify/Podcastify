const querystring = require("querystring");
const axios = require("axios");
const listenUrl = "https://listen-api.listennotes.com/api/v2";

const forwardRequest = async (req, res, next) => {
  const { originalUrl } = req;
  const forwardUrl = originalUrl.replace("/listenAPI", "");
  try {
    const result = await axios({
      method: "get",
      url: listenUrl + forwardUrl,
      headers: {
        "X-ListenAPI-Key": res.app.locals.listenKey,
      },
    });
    res.locals.data = result.data;
    res.locals.ok = true;
  } catch (error) {
    res.locals.error = error;
    return res.status(500).json(res.locals);
  }
  next();
};

module.exports = { forwardRequest };
