const API_PORT = 3001;
var cors = require('cors');
const express = require('express');

const app = express();
const router = express.Router();

app.use(cors());

router.get('/data', (req, res) => {
  res.send("Siema")
});

app.use('/api', router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));