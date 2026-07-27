const mongoose = require('mongoose')

const {GYM_APP_MONGODB_HOST, GYM_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${GYM_APP_MONGODB_HOST}/${GYM_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI)
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));

