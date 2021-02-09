const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/auth')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdasd123412342wdfsdf425trhrythnwefd23'] }));

app.use(authRouter);


app.listen(3000, () => console.log('Listening on port 3000'));
