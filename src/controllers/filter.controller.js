const db = require('../config/database');

exports.processFilter = async(req, res) => {
    const gender = req.params.gender;
    const agestart = req.params.agestart;
    const ageend = req.params.ageend;
    const newClothes = req.params.newClothes;
    const discounting = req.params.discounting;
    var query = "SELECT productid, productname, quantity, price FROM clothes ";
    if (gender != "both" || newClothes || discounting) {
        query = query + "WHERE ";
    }
    if (gender != "both") {
        query = query + `gender='${gender}' and `
    }
    if (ageend != 15) {
        query = query + `agestart=${agestart} and ageend=${ageend} and `
    }
    if (newClothes == true) {

    }
    if (discounting == true) {
        query = query + `discount != 0 and `
    }
    query = query.slice(0, query.length - 4)
    const response = await db.query(
        query
    );
    res.status(200).send(response.rows);
}