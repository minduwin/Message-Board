const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
