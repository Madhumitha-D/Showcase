const express = require('express');
// const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express();
app.use(cors());
app.use(express.json());
// app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: 'dmadhu16122000@gmail.com',
      pass: 'zlrlozabvpzbamvm'
    }
  });

  transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


  app.post("/Footer", (req, res) => {
    console.log("madhu")
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message; 
    // console.log('name',req.body.name);
    console.log(req.body);

    const mailOptions = {
      from: email,
      to: "dmadhu16122000@gmail.com",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\n Subject: ${subject} \nMessage:${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }

    });
  });