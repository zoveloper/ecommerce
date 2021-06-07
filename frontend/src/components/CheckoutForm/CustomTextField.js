import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name,value, placeholder,type, required,onChange }) {
  const { control } = useFormContext();


  return (
    <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                name={name}
                render = {({field})=> (
                    <TextField
                        fullWidth
                        placeholder={placeholder}
                        type={type}
                        required={required}
                        onChange={onChange}
                        value={value}
                    />
                )}
            />
        </Grid>
  );
}

export default FormInput;

