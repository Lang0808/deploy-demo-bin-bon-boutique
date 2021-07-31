const db = require('../config/database');

exports.getUrlById = async(req, res) => {
    const id = parseInt(req.params.id);
    const response = await db.query(
        "SELECT * FROM url WHERE id=$1", [id]
    );
    res.status(200).send(response.rows);
}