const functions = require("firebase-functions");
const express = require("express");
const cors=require("cors");
const stripe =require("stripe")
('sk_test_51NIrqLSE1KkGSSXSlP5asY2frbY1BL75jas1eoDwxZLzJU9ql9y85NDbmiir1vybub37BpM3MiXi39nNUsdjh5j200frgB7VYR')

//-App config
const app=express();

//-middleware
app.use(cors({origin:true}));
app.use(express.json());

//-api routes
app.get('/',(request,response)=>response.status(200).send('hello world'))

app.post('/payments/create', async(req,res)=>{
    const total= req.query.total;

    console.log('Payment Request Received Boom!!! for tis amount>>>',total)

    const paymentIntent= await stripe.paymentIntents.create({
        amount:total,
        currency: "USD",
    });

    res.status(201).send({
        clientSecret:paymentIntent.client_Secret,
    })

})

//-Listen command

exports.api=functions.https.onRequest(app) 

//http://127.0.0.1:5001/clone-262fb/us-central1/api

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
