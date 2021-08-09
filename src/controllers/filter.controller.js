const db = require('../config/database');

exports.processFilter = async(req, res) => {
    console.log(req.params);
    var query = "SELECT * FROM clothes ";
    if (req.params.gender != 'both' || req.params.newClothes === 'New' || req.params.discounting === 'Discount') {
        query += 'WHERE ';
        var previous = false;
        if (req.params.gender != 'both') {
            query += `gender = '${req.params.gender}'`;
            previous = true;
        }
        if (req.params.ageend != '15') {
            query += `${previous?' and ':''} agestart=${req.params.agestart} and ageend=${req.params.ageend}`;
            previous = true;
        }
        if (req.params.discounting === 'Discount') {
            query += `${previous?' and ':''} discount != 0`;
            previous = true;
        }
    }
    console.log(query);
    const response = await db.query(
        query
    );
    res.status(200).send(response.rows);
}

exports.HandleLocationSearch = async(req, res) => {
    console.log(req.body);
    const B = req.body.B;
    const lastId = parseInt(req.params.lastId);
    var query;
    query = "SELECT * FROM clothes WHERE ";
    var previous = false;
    for (let i = 0; i < B.length; i++) {
        const A = B[i].split('=');
        if (A[0] === 'gender') {
            query = query + `${previous?'and ':''} gender=\'${A[1]}\' `;
            previous = true;
        } else if (A[0] == 'age') {
            const C = A[1].split('-');
            query = query + `${previous?'and ':''} agestart=${C[0]} and ageend=${C[1]} `;
            previous = true;
        } else if (A[0] == 'newClothes') {

        } else if (A[0] == 'discounting') {
            query += `${previous?' and ':''} discount != 0`;
            previous = true;
        }
    }
    query = query + `${previous?' and ':' '} productid>${lastId} LIMIT 10`;
    console.log(query);
    const response = await db.query(
        query
    );
    res.status(200).send(response.rows);
}