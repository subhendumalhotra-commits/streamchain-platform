const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'StreamChain API is running' });
});

app.get('/api/videos', (req, res) => {
  res.json([
    { id: 1, title: 'Welcome to StreamChain', cid: 'QmTest123' },
    { id: 2, title: 'Web3 Tutorial', cid: 'QmTest456' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
