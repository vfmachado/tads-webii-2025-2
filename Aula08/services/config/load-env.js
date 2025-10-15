import { configDotenv } from "dotenv";

console.log({ env: process.env.NODE_ENV})
export const loadEnv = () => {
    if (process.env.NODE_ENV == 'dev')
        configDotenv({
            path: '.dev.env'
        });
    else
        configDotenv();

    console.log({ 
        env: process.env
    })
}
