const db = require('../config/database');

exports.getAllProductPage = async(req, res) => {
    var page = req.params.page;
    const response = await db.query(
        "SELECT productid, productname, quantity, price from clothes where productid>$1 limit 10", [(page - 1) * 10]
    );
    res.status(200).send(response.rows);
}