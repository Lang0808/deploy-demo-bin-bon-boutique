const express = require('express');
const cors = require('cors');

const app = express();
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');
const bannerRoute = require('./routes/banner.route');
const allRoute = require('./routes/all.route');
const filterRoute = require('./routes/filter.route');
const urlRoute = require('./routes/url.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', productRoute);
app.use('/api/', bannerRoute);
app.use('/api', allRoute);
app.use('/api', filterRoute);
app.use('/api/', urlRoute);

module.exports = app;