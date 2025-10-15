import { sendEmail } from "./send-email.js";
import Handlebars from "handlebars";
export const welcomeEmail = async () => {
    var source = "Boas vindas {{usuario}}!!!";
    var template = Handlebars.compile(source);

    var data = { "usuario": "Vinicius"};
    var result = template(data);

    sendEmail('', 'BOAS VINDAS', result);
}