const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(process.env.VERSION || "DEFAULT VERSION");
});

app.listen(3000, () => console.log("Server running"));
