import express from 'express';
import { Connection } from './database/db.js';
const app = express();

const port = 4000

Connection();


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
