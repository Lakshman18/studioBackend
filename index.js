require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');     
const connection = require('./db');

const authRouter = require('./routers/auth.routers')

//database
connection();

//middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(authRouter);   