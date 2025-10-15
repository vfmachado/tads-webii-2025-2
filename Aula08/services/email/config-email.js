
import nodemailer from 'nodemailer';
import { loadEnv } from '../config/load-env.js';
loadEnv();

console.log({ EMAIL_PASSWORD: process.env.EMAIL_PASSWORD})

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "fritzen.web2@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
    },
});