import express from 'express';
import cors from 'cors';
import profile from './routes/profile.mjs'

const app = express();


app.use(cors());

app.use('/', profile);

// app.get('/', (req, res) => {
//   res.send('server');
// })

app.listen(5000, console.log('http://localhost:5000'))