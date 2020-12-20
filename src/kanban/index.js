const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const kanbanRoutes = require('./routes/kanban');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(kanbanRoutes);

app.listen(PORT, () => {
    console.log('Server has been started on ' + PORT);
});