const mongoose = require('mongoose');


// for new projects, change db name below
const db_name = 'joke_db';


// verify your username and passsword"
mongoose.connect(`mongodb+srv://ngray122:root@cluster0.tewol.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
    