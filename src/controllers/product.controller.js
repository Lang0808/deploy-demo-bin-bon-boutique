const db = require("../config/database");

exports.createProduct = async(req, res) => {
    const { product_name, quantity, price, description, discount, gender, agestart, ageend } = req.body;
    console.log(product_name, quantity, price)
    const { rows } = await db.query(
        "INSERT INTO clothes (productname, quantity, price, description, discount, gender, agestart, ageend) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [product_name, quantity, price, description, discount, gender, agestart, ageend]
    );
    res.status(201).send({
        message: "Product added successfully !",
        body: {
            product: { product_name, quantity, price }
        }
    });
};

exports.findProductById = async(req, res) => {
    console.log(req.params.id);
    const productId = parseInt(req.params.id);
    console.log(productId);
    const response = await db.query(
        "SELECT * FROM clothes where productid=$1", [productId]
    );
    res.status(200).send(response.rows);
}

exports.updateProductById = async(req, res) => {
    const productId = parseInt(req.params.id);
    const { product_name, quantity, price } = req.body;
    const response = await db.query(
        "UPDATE clothes SET productname=$1, quantity=$2, price=$3 where productid=$4", [product_name, quantity, price, productId]
    );
    res.status(200).send({ message: "Update successfully" });
}

exports.deleteProductById = async(req, res) => {
    const productId = parseInt(req.params.id);
    const response = await db.query(
        "DELETE from clothes WHERE productid=$1", [productId]
    );
    res.status(200).send({
        message: "Delete successfully"
    });
}