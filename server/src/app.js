import express from 'express';
import mongoose from 'mongoose';

const app = express();

const url = 'mongodb://localhost:27017';

try {
    await mongoose.connect(url, {
        dbName: 'fade-district-varna',
    });

    console.log('Successfully connected to DB!');
} catch (error) {
    console.error('Cannot connetct to DB', error.message);
}

app.get('/', (req, res) => {
    res.send('It works!');
})

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));
