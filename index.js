const Sib = require("sib-api-v3-sdk");

require("dotenv").config();

const client = Sib.ApiClient.instance;

const apiKey = client.authentications["api_key"];
apiKey.apiKey = process.env.API_KEY;

const transEmailApi = new Sib.TransactionalEmailsApi();

const sender = {
  email: "mailtoshivam2002@gmail.com",
  name: "Shivam",
};

const receivers = [
  {
    email: "shivamworking123@gmail.com",
  },
];

transEmailApi
  .sendTransacEmail({
    sender,
    to: receivers,
    subject: "HEllo buddy how are you",
    textContent: `
  dfsjjld;fjdsfjdfjds;fjdsf
  `,
  })
  .then(console.log)
  .catch(console.log);
