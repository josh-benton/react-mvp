import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/test', (req, res) => {
  res.json('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
