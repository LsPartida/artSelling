const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to LocarBri API' }));

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

const PORT = process.env.PORT || 5051;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
