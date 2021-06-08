import React,{useState} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import FormInput from './CustomTextField';
import { saveShippingAddress,savePaymentMethod } from '../../actions/cartActions'

const AddressForm = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart

  const [firstName, setFirstName] = useState(shippingAddress.firstName)
  const [lastName, setLastName] = useState(shippingAddress.lastName)
  const [email, setEmail] = useState(shippingAddress.email)
  const [phone, setPhone] = useState(shippingAddress.phone)
  
  const [address1, setAddress1] = useState(shippingAddress.address1)
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)
  const methods = useForm()
  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(saveShippingAddress({firstName,lastName,email,phone,address1, address, city, postalCode, country}))
 
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
          <FormProvider {...methods}>
          <form onSubmit={submitHandler}>
            <Grid container spacing={3}>
            <FormInput 
            required
            name="firstName"
            type='text'
            placeholder='Enter firstName'
            value={firstName ? firstName : ''}
            onChange={(e) => setFirstName(e.target.value)} />
            <FormInput 
            required
            name="LastName"
            type='text'
            placeholder='Enter LastName'
            value={lastName ? lastName : ''}
            onChange={(e) => setLastName(e.target.value)}
            />
            <FormInput 
            required
            name="email"
            type='email'
            placeholder='Enter email'
            value={email ? email : ''}
            onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput 
            required
            name="phone"
            type='tel'
            placeholder='number'
            value={phone ? phone : ''}
            onChange={(e) => setPhone(e.target.value)}
            />
            <FormInput 
            required
            name="address"
            type='text'
            placeholder='Enter address'
            value={address ? address : ''}
            onChange={(e) => setAddress(e.target.value)}
            />
            <FormInput 
            
            name="address1"
            type='text'
            placeholder='Enter address1(optional)'
            value={address1 ? address1 : ''}
            onChange={(e) => setAddress1(e.target.value)}
            />
            <FormInput 
            required
            name="firstName"
            type='text'
            placeholder='Enter city'
            value={city ? city : ''}
            onChange={(e) => setCity(e.target.value)}
            />
            <FormInput 
              required
              name="firstName"
              type='text'
              placeholder='Enter postal code'
              value={postalCode ? postalCode : ''}
              onChange={(e) => setPostalCode(e.target.value)}
            />
             <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select  >
                
                  <MenuItem >
                    select
                  </MenuItem>

              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select  >
                
                  <MenuItem >
                    select
                  </MenuItem>

              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select  >
                
                  <MenuItem >
                    select
                  </MenuItem>

              </Select>
            </Grid>
            </Grid>
            <Button type='submit' variant='primary'>
              Continue
            </Button>
          </form>

          </FormProvider>
    </>
  )
}

export default AddressForm
