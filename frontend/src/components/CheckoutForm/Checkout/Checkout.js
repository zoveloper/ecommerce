import React, {useState, useEffect} from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../actions/orderActions'
import { saveShippingAddress,savePaymentMethod } from '../../../actions/cartActions'

import { ORDER_CREATE_RESET } from '../../../constants/orderConstants'
import { useForm } from 'react-hook-form';
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({history}) => {
    const [activeStep, setActiveStep] = useState(0);
    
    const classes = useStyles();
    const orderCreate = useSelector(state => state.orderCreate)
    const {order, error, success} = orderCreate

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    console.log(setActiveStep)

    useEffect(() =>{
        if(success){
            history.push(`/order/${order._id}`)
            dispatch({type: ORDER_CREATE_RESET})
        }
    }, [success, history])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems:cart.cartItems,
            shippingAddress:cart.shippingAddress,
            paymentMethod:cart.paymentMethod,
            itemsPrice:cart.itemsPrice,
            shippingPrice:cart.shippingPrice,
            taxPrice:cart.taxPrice,
            totalPrice:cart.totalPrice,
        }))

    }

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const {shippingAddress} = cart
  const next =()=>{
    nextStep()
  }
    
  const methods = useForm();
  const Form = () => (activeStep === 0
    ? <AddressForm next={next}/>
    : <PaymentForm backStep={backStep}/>);
  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));

    return (
          <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> :   <Form />}
        </Paper>
      </main>
    </>

    )
}

export default Checkout
