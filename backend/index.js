const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

const fakeUser = {
  username: 'testuser',
  password: '1234'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === fakeUser.username && password === fakeUser.password) {
    return res.json({ success: true, message: 'Login successful!' });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
