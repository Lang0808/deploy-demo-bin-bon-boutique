const db = require('../config/database');

exports.getAllProductPage = async(req, res) => {
    console.log(req.params);
    var lastId = parseInt(req.params.lastId);
    const response = await db.query(
        "SELECT productid, productname, quantity, price from clothes where productid>$1 limit 10", [lastId]
    );
    res.status(200).send(response.rows);
}