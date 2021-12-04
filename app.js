const express = require('express');
const path = require('path')
const app = express();
const errorController = require('./controllers/error')

const sequelize = require('./util/database')

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)

sequelize.sync().then(result => {
    app.listen(3000);
}).catch(err => {
    console.log(err)
})


