import express from 'express';
import { DATA } from '../src/constants/DATA';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Bar Chart app listening on port ${port}`);
});

// API end point to generate the books and its rating randomly..
app.get("/data", (req, res) => {
    res.status(200).send(DATA);
});
