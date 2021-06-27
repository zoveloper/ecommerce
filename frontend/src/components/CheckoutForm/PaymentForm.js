import React from 'react'
import OrderSummary from './OrderSummary'
import { Typography, Button, Divider } from '@material-ui/core'
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createOrder } from '../../actions/orderActions'


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
console.log(stripePromise)


function PaymentForm({backStep}) {
  const stripe = useStripe()
  const elements = useElements()


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
        dispatch(createOrder({
            orderItems:cart.cartItems,
            shippingAddress:cart.shippingAddress,
            paymentMethod:cart.paymentMethod,
            itemsPrice:cart.itemsPrice,
            shippingPrice:cart.shippingPrice,
            taxPrice:cart.taxPrice,
            totalPrice:cart.totalPrice,
        }))
  };





  return (
    <>
      <OrderSummary/>
      <Divider/>
      <Typography variant="h6" gutterBottom style={{ margin: '20px0'}}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({elements, stripe}) =>(
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br/><br/>
              <div style={{ display:'flex', justifyContent:'space-between'}}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay now
              </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm
