import React from 'react'
import OrderSummary from './OrderSummary'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
console.log(stripePromise)
function PaymentForm({backStep}) {

  return (
    <>
      <OrderSummary/>
      <Divider/>
      <Typography variant="h6" gutterBottom style={{ margin: '20px0'}}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({elements, stripe}) =>(
            <form>
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
