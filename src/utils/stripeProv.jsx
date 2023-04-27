
import { loadStripe } from "@stripe/stripe-js";

const key = process.env.REACT_APP_STRIPE_PUB_KEY

export const stripePromise = loadStripe(key);