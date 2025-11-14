const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');
const healthRouter = require('./routes/health');

const app = express();

app.use(cors()); // habilita CORS para todas as origens
app.use(express.json());

app.use('/health', healthRouter);
app.use('/products', productsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Products API listening on port ${port}`);
});
