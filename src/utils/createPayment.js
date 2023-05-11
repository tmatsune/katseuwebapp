

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


exports.handler = async(e) => {
    try{
        const {amount} = JSON.parse(e.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_type: ["card"]
        })
        return {
            status: 200,
            body: JSON.stringify( { paymentIntent } )
        }
    }catch(err){
        console.log(err);
        return {
            status: 200,
            body: JSON.stringify({ err })
        }
    }
}