
// if (process.env.NODE_ENV !== 'production')
// {
//     require('dotenv').load();
//     }
const express = require('express');
const mongoose =require('mongoose');
const expressLayouts =require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
console.log(__dirname);
app.set("views", __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'))

const indexRouter = require('./routes/index');
app.use('/', indexRouter);
const DATABASE_URL = "mongodb+srv://admin-manas:atlas31@cluster0.fv4vq.mongodb.net/myDB?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
db.once('open', () => {
    console.log("DB is connected");
})
db.on('error', (error) => console.log(error));

app.listen(PORT, (req, res) => {
    console.log(`App is listening at PORT ${PORT}`);
})