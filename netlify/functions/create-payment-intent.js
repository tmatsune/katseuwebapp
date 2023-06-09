

require('dotenv').config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async(event) => {
    try{
        const {amount} = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ["card"]
        })
        return {
            statusCode: 200,
            body: JSON.stringify( { paymentIntent } )
        }
    }catch(err){
        return {
            statusCode: 400,
            body: JSON.stringify({ err })
        }
    }
}