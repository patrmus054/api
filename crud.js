const getOne = model => async (req, res) => {
  try {
    const doc = await model
      .findOne({
        id: req.req.id
      })
      .lean()
      .exec()

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({
      data: doc
    })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
};

const getMany = model => async (req, res) => {
  try {
    const docs = await model
      .find({
        id: req.req.id
      })
      .lean()
      .exec()

    res.status(200).json({
      data: docs
    })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
};

const createOne = model => async (req, res) => {};

const updateOne = model => async (req, res) => {};

const removeOne = model => async (req, res) => {};

const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
});

exports.getOne = getOne;
exports.crudControllers = crudControllers;