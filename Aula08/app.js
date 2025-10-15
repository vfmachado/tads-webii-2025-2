import { loadEnv } from './services/config/load-env.js';
loadEnv();

import express from 'express'

import { welcomeEmail } from './services/email/welcome-email.js';


const app = express();


app.get('/test-email', async (req, res) => {
    await welcomeEmail();
    res.send("TINHA QUE ENVIAR UM EMAIL");

})

app.listen(3000);