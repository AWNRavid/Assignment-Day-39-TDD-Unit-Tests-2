const mathModel = require('../../storage/models/math.model');

const checkOddEven = async (req, res) => {
  const { n } = req.body;
  try {
    const result = await mathModel.checkOddEven(n);
    res.json({
      data: result,
      error: null,
    });
  } catch (e) {
    res.json({
      data: null,
      error: e.message,
    });
  } finally {
    res.end();
  }
};

const sum = async (req, res) => {
  const { a, b } = req.body;
  try {
    const result = await mathModel.sum(a, b)
    res.json({
      data: result,
      error: null,
    });
  } catch (e) {
    res.json({
      data: null,
      error: e.message,
    });
  } finally {
    res.end();
  }
};

const countStr = async (req, res) => {
  const { a } = req.body;
  try {
    const result = await mathModel.countStr(a)
    res.json({
      data: result,
      error: null,
    });
  } catch (e) {
    res.json({
      data: null,
      error: e.message,
    });
  } finally {
    res.end();
  }
};

const weekend = async (req, res) => {
  const { a } = req.body;
  try {
    const result = await mathModel.weekend(a)
    res.json({
      data: result,
      error: null,
    });
  } catch (e) {
    res.json({
      data: null,
      error: e.message,
    });
  } finally {
    res.end();
  }
};

const leapYear = async (req, res) => {
  const { a } = req.body;
  try {
    const result = await mathModel.leapYear(a)
    res.json({
      data: result,
      error: null,
    });
  } catch (e) {
    res.json({
      data: null,
      error: e.message,
    });
  } finally {
    res.end();
  }
};

module.exports = {
  checkOddEven,
  sum,
  countStr,
  weekend,
  leapYear,
};
