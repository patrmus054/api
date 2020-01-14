const {
    Food
} = require('./food.model');

module.exports = {
    add: async (req, res) => {
        Food.create({
            name: req.body.name,
            calories: req.body.calories,
            protein: req.body.protein,
            fat: req.body.fat,
            carbohydrates: req.body.carbohydrates
        }, (error) => {
            console.log("jestem")
            if (error) {
                return res.status(400).json({
                    err: error.message
                });
            }
            res.status(200).json({
                ok: true
            });
        });
    }
}