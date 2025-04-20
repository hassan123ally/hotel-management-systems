const express = require('express');
const app = express();
app.use(express.json());

app.post('/book-room', (req, res) => {
    res.send('Room booked successfully');
});

app.listen(3000, () => console.log('Server running on port 3000'));
