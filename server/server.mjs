import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.send('server');
})

app.listen(5000, console.log('http://localhost:5000'))