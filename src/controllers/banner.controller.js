const db = require('../config/database');

exports.getBanner = async(req, res) => {
    const response = await db.query(
        "SELECT * from banner"
    );
    res.status(200).send(response.rows);
}

exports.modifyBannerById = async(req, res) => {
    const { oldId, newId } = req.body;
    const response = await db.query(
        "UPDATE banner SET productid=$2 where productid=$1", [oldId, newId]
    );
    res.status(200).send({
        message: "Update successfully"
    });
}

exports.addBanner = async(req, res) => {
    const { productid } = req.body;
    const response = db.query(
        "INSERT into banner VALUES ($1)", [productid]
    );
    res.status(200).send({
        message: "Add successfully"
    });
}