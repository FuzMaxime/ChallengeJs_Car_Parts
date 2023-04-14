import express from 'express';

const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/index.html'));
});

app.get('/game', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '/game.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} // http://localhost:${port}/`);
});