import express from 'express';
const app = express();
const port = process.env.PORT || 5500;
app.get('/', (req, res) => {
    return res.json({ message: 'Hello world' });
});
app.listen(port, () => console.log('Running on port', port));
